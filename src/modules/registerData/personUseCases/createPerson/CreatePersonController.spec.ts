import { app } from "../../../../app";
import { hash } from "bcrypt";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";
import createConnection from "../../../../database/index";
import faker from "faker";
import { ICreatePersonDTO } from "../../repositories/IPersonRepository";

let connection: Connection;
const generatePersonFaker = (command?: ICreatePersonDTO) => {
  return {
    name: command?.name !== undefined ? command?.name : faker.name.findName(),
    cpf: command?.cpf !== undefined ? command?.cpf : faker.datatype.string(),
    birth_date: command?.birth_date !== undefined ? command?.birth_date : faker.date.past(),
    profession: command?.profession !== undefined ? command?.profession : faker.datatype.string(),
    citizenship: command?.citizenship !== undefined ? command?.citizenship : faker.datatype.string(),
    birth_state: command?.birth_state !== undefined ? command?.birth_state : faker.datatype.string(),
    birth_city: command?.birth_city !== undefined ? command?.birth_city : faker.datatype.string(),
    race: command?.race !== undefined ? command?.race : faker.datatype.string(),
    mothers_name: command?.mothers_name !== undefined ? command?.mothers_name : faker.datatype.string(),
    fathers_name: command?.fathers_name !== undefined ? command?.fathers_name : faker.datatype.string(),
    notes: command?.notes !== undefined ? command?.notes : faker.datatype.string(),
  };
};
describe("Create Person Controller", () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("12345", 8);

    await connection.query(`
      INSERT INTO USERS(id, name,login,password)
        values('${id}','Mell2','Mellina2','${password}')
     `);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it("should be able to create a new person", async () => {
    const responseToken = await request(app).post("/sessions").send({
      login: "Mellina2",
      password: "12345",
    });

    console.log(responseToken.body);

    const { token } = responseToken.body;
    const personFaker = generatePersonFaker({
      name: faker.name.findName(),
      cpf: "254.856.354-47",
      birth_date: faker.date.past(150, 2022),
      birth_city: "Curitiba",
      birth_state: "Paraná",
      citizenship: "Brasileiro",
      fathers_name: "Pedro da Silva",
      mothers_name: "Maria da Silva",
      profession: "Aposentado",
      race: "Branco",
      notes: "NDA",
    });
    const response = await request(app)
      .post("/person")
      .send(personFaker)
      .set({
        Authorization: `Bearer ${token}`,
      });

    console.log(personFaker);

    expect(response.status).toBe(201);
  });

  // it("should not be able to create a new person if CPF already exists", async () => {
  //   const responseToken = await request(app).post("/sessions").send({
  //     login: "Mellina2",
  //     password: "12345",
  //   });

  //   const { token } = responseToken.body;

  //   const response = await request(app)
  //     .post("/person")
  //     .send({
  //       name: "João Supertest",
  //       cpf: "254.856.354-47",
  //       birth_date: new Date("25-07-1941"),
  //       birth_city: "Curitiba",
  //       birth_state: "Paraná",
  //       citizenship: "Brasileiro",
  //       fathers_name: "Pedro da Silva",
  //       mothers_name: "Maria da Silva",
  //       profession: "Aposentado",
  //       race: "Branco",
  //       notes: "NDA",
  //     })
  //     .set({
  //       Authorization: `Bearer ${token}`,
  //     });

  //   expect(response.status).toBe(400);
  // });
});
