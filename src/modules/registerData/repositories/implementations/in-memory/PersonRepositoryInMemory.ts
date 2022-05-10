import { IPersonRepository, ICreatePersonDTO } from "../../IPersonRepository";
import { Person } from "../../../entities/Person";

class PersonRepositoryInMemory implements IPersonRepository {
  person: Person[] = [];

  async findByCPF(cpf: string): Promise<Person> {
    return this.person.find((person) => person.cpf === cpf);
  }

  async findByPersonId(id: string): Promise<Person> {
    return this.person.find((person) => person.id === id);
  }

  async findByName(name: string): Promise<Person[] | undefined> {
    return this.person.filter((person) => person.name === name);
  }

  async findByMothersName(mothers_name: string): Promise<Person[] | undefined> {
    return this.person.filter((person) => person.mothers_name === mothers_name);
  }

  async list(): Promise<Person[] | undefined> {
    return this.person;
  }
  async create({
    name,
    cpf,
    birth_date,
    birth_city,
    birth_state,
    citizenship,
    fathers_name,
    mothers_name,
    profession,
    race,
    notes,
  }: ICreatePersonDTO): Promise<Person> {
    const person = new Person();

    Object.assign(person, {
      name,
      cpf,
      birth_date,
      birth_city,
      birth_state,
      citizenship,
      fathers_name,
      mothers_name,
      profession,
      race,
      notes,
    });

    this.person.push(person);

    return person;
  }
}

export { PersonRepositoryInMemory };
