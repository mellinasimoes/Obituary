import { Connection, createConnection } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";
import request from "supertest";
import { app } from "../../../../app";

let connection:Connection;
describe ("Create Person Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuidV4();
    const password = await hash("user",8);

    await connection.query(`
      INSERT INTO USERS(id, name,login,password)
         values('${id}','user','user@obituary.com.br','${password}')
      `
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();

  })
  it ("should be able to create a new person", async () => {
    const responseToken = await request(app).post("/sessions").send({
      login:"user@obituary.com.br",
      password:"user",
    });

    const {refresh_token} = responseToken.body;
    
    const response = await request(app).post("/person").send({
      name: "João Supertest",
      cpf: "254.856.354-47",
      birth_date: new Date("25-07-1941"),
      birth_city: "Curitiba",
      birth_state: "Paraná",
      citizenship: "Brasileiro",
      fathers_name: "Pedro da Silva",
      mothers_name: "Maria da Silva",
      profession: "Aposentado",
      race: "Branco",
      notes: "NDA"
    }).set({
      Authorization:`Bearer ${refresh_token}`,
    });
    expect(response.status).toBe(201);
  });

  it ("should not be able to create a new person if CPF already exists", async () => {
    const responseToken = await request(app).post("/sessions").send({
      login:"user@user.com.br",
      password:"user",
    });

    const {token} = responseToken.body;
    
    const response = await request(app).post("/person").send({
      name: "João Supertest",
      cpf: "254.856.354-47",
      birth_date: new Date("25-07-1941"),
      birth_city: "Curitiba",
      birth_state: "Paraná",
      citizenship: "Brasileiro",
      fathers_name: "Pedro da Silva",
      mothers_name: "Maria da Silva",
      profession: "Aposentado",
      race: "Branco",
      notes: "NDA"
    }).set({
      Authorization:`Bearer ${token}`,
    });
    expect(response.status).toBe(400);
  });
});
