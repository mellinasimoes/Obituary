import {Person} from "../../entities/Person";
import {IPersonRepository, ICreatePersonDTO} from "../IPersonRepository"
import {Repository, getRepository} from "typeorm";

class PersonRepository implements IPersonRepository {
  private repository:Repository<Person>;

  constructor (){
    this.repository= getRepository(Person);
  }

  async create ({name,
    cpf,
    birth_date,
    birth_city,
    birth_state,
    citizenship,
    fathers_name,
    mothers_name,
    profession,
    race,
    notes}:ICreatePersonDTO): Promise<Person> {
    const person= this.repository.create({
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

    const personCreated= await this.repository.save(person);
    
    return personCreated;
  }

  async list(): Promise<Person[]> {
    const person= await this.repository.find({
      order:{
        name:"ASC",
      }
    });
    return person;
  }

  async findByName(name:string):Promise<Person[] | undefined>{
    const person = await this.repository.find({name});
    return person;

  }
  async findByMothersName(mothers_name:string):Promise<Person[] | undefined>{
    const person = await this.repository.find({mothers_name});
    return person;
  }

  async findByPersonId(id: string): Promise<Person> {
    const person = await this.repository.findOne({id});
    return person
  }

  async findByCPF(cpf: string): Promise<Person> {
    const person = await this.repository.findOne({cpf});
    return person
  }  
}
export {PersonRepository};