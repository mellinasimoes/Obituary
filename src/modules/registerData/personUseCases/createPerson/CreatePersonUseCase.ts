import { inject, injectable } from "tsyringe";
import { IPersonRepository } from "../../repositories/IPersonRepository";
import { AppError } from "../../../../database/errors/AppError";
import { Person } from "../../entities/Person";

interface IRequest {
  name: string;
  cpf: string;
  birth_date?: Date;
  profession?: string;
  citizenship?: string;
  birth_state?: string;
  birth_city?: string;
  race?: string;
  mothers_name?: string;
  fathers_name?: string;
  notes?: string;
}

@injectable()
class CreatePersonUseCase {
  constructor(
    @inject("PersonRepository")
    private personRepository: IPersonRepository,
  ) {}

  async execute({
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
  }: IRequest): Promise<Person> {
    const cpfAlreadyExists = await this.personRepository.findByCPF(cpf);

    if (cpfAlreadyExists) {
      throw new AppError("CPF already exists!");
    }

    return await this.personRepository.create({
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
  }
}
export { CreatePersonUseCase };
