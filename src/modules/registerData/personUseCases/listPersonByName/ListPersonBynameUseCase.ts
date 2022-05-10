import { IPersonRepository } from "../../repositories/IPersonRepository";
import { Person } from "../../entities/Person";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";

@injectable()
class ListPersonByNameUseCase {
  constructor(
    @inject("PersonRepository")
    private personRepository: IPersonRepository,
  ) {}

  async execute({ name }): Promise<Person[] | null> {
    const listPersonByname = await this.personRepository.findByName(name);

    if (!listPersonByname) {
      throw new AppError("Person not found!");
    }

    return listPersonByname;
  }
}

export { ListPersonByNameUseCase };
