import { Person } from "../entities/Person";

interface ICreatePersonDTO {
  name: string;
  cpf: string;
  birth_date?: Date | undefined;
  profession?: string | undefined;
  citizenship?: string | undefined;
  birth_state?: string | undefined;
  birth_city?: string | undefined;
  race?: string | undefined;
  mothers_name?: string | undefined;
  fathers_name?: string | undefined;
  notes?: string | undefined;
  created_at?: Date | undefined;
}

interface IPersonRepository {
  findByCPF(cpf: string): Promise<Person | undefined>;
  findByPersonId(id: string): Promise<Person | undefined>;
  findByName(name: string): Promise<Person[] | undefined>;
  findByMothersName(mothers_name: string): Promise<Person[] | undefined>;
  list(): Promise<Person[] | null>;
  create({
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
  }: ICreatePersonDTO): Promise<Person>;
}
export { IPersonRepository, ICreatePersonDTO };
