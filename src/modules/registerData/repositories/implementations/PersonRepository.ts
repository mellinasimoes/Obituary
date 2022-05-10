import { Person } from "../../entities/Person";
import { IPersonRepository, ICreatePersonDTO } from "../IPersonRepository";
import { Repository, getRepository } from "typeorm";

class PersonRepository implements IPersonRepository {
  private repository: Repository<Person>;

  constructor() {
    this.repository = getRepository(Person);
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
    const person = this.repository.create({
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

    return await this.repository.save(person);
  }

  async list(): Promise<Person[]> {
    return await this.repository.find({
      order: {
        name: "ASC",
      },
    });
  }

  async findByName(name: string): Promise<Person[] | undefined> {
    return await this.repository.find({ name });
  }
  async findByMothersName(mothers_name: string): Promise<Person[] | undefined> {
    return await this.repository.find({ mothers_name });
  }

  async findByPersonId(id: string): Promise<Person> {
    return await this.repository.findOne({ id });
  }

  async findByCPF(cpf: string): Promise<Person> {
    return await this.repository.findOne({ cpf });
  }
}
export { PersonRepository };
