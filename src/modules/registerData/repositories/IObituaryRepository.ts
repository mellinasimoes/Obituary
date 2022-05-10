import { Obituary } from "../entities/Obituary";

interface IcreateObituaryDTO {
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

interface IObituaryRepository {
  findObituaryByDeathCertificate(death_certificate: number): Promise<Obituary | undefined>;
  listObituaryBetweenDate(initial_date: string, final_date: string): Promise<Obituary[] | null>;
  findObituaryByFinalGraveNumber(final_grave_number: string): Promise<Obituary | undefined>;
  findObituaryByPersonId(person_id: string): Promise<Obituary | undefined>;
  listAllObituaryByFinalGraveNumber(): Promise<Obituary[] | null>;
  create({
    person_id,
    death_date,
    block,
    temporary_grave_number,
    final_grave_number,
    death_cause,
    death_certificate,
    notes,
  }: IcreateObituaryDTO): Promise<Obituary | undefined>;
}
export { IObituaryRepository, IcreateObituaryDTO };
