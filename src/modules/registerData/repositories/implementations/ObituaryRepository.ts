import { Obituary } from "../../entities/Obituary";
import { IObituaryRepository, IcreateObituaryDTO } from "../IObituaryRepository";
import { Repository, getRepository, MoreThan, LessThan, Between } from "typeorm";

class ObituaryRepository implements IObituaryRepository {
  private repository: Repository<Obituary>;

  constructor() {
    this.repository = getRepository(Obituary);
  }

  async create({
    person_id,
    death_date,
    block,
    temporary_grave_number,
    final_grave_number,
    death_cause,
    death_certificate,
    notes,
  }: IcreateObituaryDTO): Promise<Obituary> {
    const obituary = this.repository.create({
      person_id,
      death_date,
      block,
      temporary_grave_number,
      final_grave_number,
      death_cause,
      death_certificate,
      notes,
    });

    await this.repository.save(obituary);

    return obituary;
  }

  async listAllObituaryByFinalGraveNumber(): Promise<Obituary[]> {
    return await this.repository.find({
      relations: ["person"],
      order: {
        final_grave_number: "ASC",
      },
    });
  }

  async findObituaryByPersonId(person_id: string): Promise<Obituary | undefined> {
    return await this.repository.findOne({ relations: ["person"], where: { person_id: person_id } });
  }

  async findObituaryByFinalGraveNumber(final_grave_number: string): Promise<Obituary | undefined> {
    return await this.repository.findOne({ final_grave_number });
  }
  async listObituaryBetweenDate(initial_date: string, final_date: string): Promise<Obituary[] | undefined> {
    return await this.repository.find({
      relations: ["person"],
      where: { death_date: Between(initial_date, final_date) },
      order: {
        death_date: "ASC",
      },
    });
  }

  async findObituaryByDeathCertificate(death_certificate: number): Promise<Obituary | undefined> {
    return await this.repository.findOne({ death_certificate });
  }
}
export { ObituaryRepository };
