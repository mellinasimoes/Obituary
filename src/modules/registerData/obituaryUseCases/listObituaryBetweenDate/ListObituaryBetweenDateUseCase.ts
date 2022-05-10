import { inject, injectable } from "tsyringe";
import { Obituary } from "../../entities/Obituary";
import { IObituaryRepository } from "../../repositories/IObituaryRepository";

@injectable()
class ListObituaryBetweenDateUseCase {
  constructor(
    @inject("ObituaryRepository")
    private obituaryRepository: IObituaryRepository,
  ) {}

  async execute({ initial_date, final_date }): Promise<Obituary[] | null> {
    return await this.obituaryRepository.listObituaryBetweenDate(initial_date, final_date);
  }
}

export { ListObituaryBetweenDateUseCase };
