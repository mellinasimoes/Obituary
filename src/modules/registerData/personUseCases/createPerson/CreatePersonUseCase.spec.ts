import { AppError } from "../../../../database/errors/AppError";
import { PersonRepositoryInMemory } from "../../repositories/implementations/in-memory/PersonRepositoryInMemory";
import { CreatePersonUseCase } from "./CreatePersonUseCase";

let createPersonUseCase: CreatePersonUseCase;
let personRepositoryInMemory: PersonRepositoryInMemory;

describe("Create Person", () => {
  beforeEach(() => {
    personRepositoryInMemory = new PersonRepositoryInMemory();
    createPersonUseCase = new CreatePersonUseCase(personRepositoryInMemory);
  });

  it("Should be able to create a new person", async () => {
    const person = await createPersonUseCase.execute({
      name: "João da Silva",
      cpf: "254.856.854-47",
      birth_date: new Date("25-07-1941"),
      birth_city: "Curitiba",
      birth_state: "Paraná",
      citizenship: "Brasileiro",
      fathers_name: "Pedro da Silva",
      mothers_name: "Maria da Silva",
      profession: "Aposentado",
      race: "Branco",
      notes: "NDA",
    });

    expect(person).toHaveProperty("id");
  });

  it("Should not be able to create a new person with same cpf", async () => {
    const person = {
      name: "João Souza",
      cpf: "254.856.854-47",
      birth_date: new Date("25-07-1941"),
      birth_city: "Curitiba",
      birth_state: "Paraná",
      citizenship: "Brasileiro",
      fathers_name: "Pedro da Silva",
      mothers_name: "Maria da Silva",
      profession: "Aposentado",
      race: "Branco",
      notes: "NDA",
    };

    await createPersonUseCase.execute({
      name: person.name,
      cpf: person.cpf,
      birth_date: person.birth_date,
      birth_city: person.birth_city,
      birth_state: person.birth_state,
      citizenship: person.citizenship,
      fathers_name: person.fathers_name,
      mothers_name: person.mothers_name,
      profession: person.profession,
      race: person.race,
      notes: person.notes,
    });

    await expect(
      createPersonUseCase.execute({
        name: person.name,
        cpf: person.cpf,
        birth_date: person.birth_date,
        birth_city: person.birth_city,
        birth_state: person.birth_state,
        citizenship: person.citizenship,
        fathers_name: person.fathers_name,
        mothers_name: person.mothers_name,
        profession: person.profession,
        race: person.race,
        notes: person.notes,
      }),
    ).rejects.toEqual(new AppError("CPF already exists!"));
  });
});
