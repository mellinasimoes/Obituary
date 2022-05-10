import { IObituaryRepository } from "../../repositories/IObituaryRepository";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";
import { Obituary } from "../../entities/Obituary";

interface IRequest {
  id?: string;
  person_id: string;
  death_date: Date;
  block: string;
  temporary_grave_number: string;
  final_grave_number: string;
  death_cause: string;
  death_certificate: number;
  notes?: string;
}
@injectable()
class CreateObituaryUseCase {
  constructor(
    @inject("ObituaryRepository")
    private obituaryRepository: IObituaryRepository,
  ) {}

  async execute({
    person_id,
    death_date,
    block,
    temporary_grave_number,
    final_grave_number,
    death_cause,
    death_certificate,
    notes,
  }: IRequest): Promise<Obituary | undefined> {
    const personIdAlreadyExists = await this.obituaryRepository.findObituaryByPersonId(person_id);

    if (personIdAlreadyExists) {
      throw new AppError("Obituary with this person id already exists!");
    }

    const deathCertificateAlreadyExists = await this.obituaryRepository.findObituaryByDeathCertificate(
      death_certificate,
    );

    if (deathCertificateAlreadyExists) {
      throw new AppError("Obituary with this death certificate already exists!");
    }

    return await this.obituaryRepository.create({
      person_id,
      death_date,
      block,
      temporary_grave_number,
      final_grave_number,
      death_cause,
      death_certificate,
      notes,
    });
  }
}
export { CreateObituaryUseCase };
