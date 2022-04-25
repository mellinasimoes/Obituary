import { IObituaryRepository, IcreateObituaryDTO } from "../../IObituaryRepository";
import { Obituary } from "src/modules/registerData/entities/Obituary";


class ObituaryRepositoryInMemory implements IObituaryRepository{

  obituaries:Obituary[]=[];

  async findObituaryByDeathCertificate(death_certificate: number): Promise<Obituary> {
    const obituary = this.obituaries.find(obituary => obituary.death_certificate === death_certificate);
    return obituary;
  }
  async listObituaryBetweenDate(initial_date: string, final_date: string): Promise<Obituary[]> {
    const obituary = this.obituaries.find ();
    return obituary
    
  }
  async findObituaryByFinalGraveNumber(final_grave_number: string): Promise<Obituary> {
    const obituary = this.obituaries.find(obituary => obituary.final_grave_number === final_grave_number);
    return obituary;
  }
  async findObituaryByPersonId(person_id: string): Promise<Obituary> {
    const obituary = this.obituaries.find(obituary => obituary.person_id === person_id);
    return obituary;
  }
  async listAllObituaryByFinalGraveNumber(): Promise<Obituary[]> {

}
  create({ 
    person_id,
    death_date,
    block,
    temporary_grave_number,
    final_grave_number,
    death_cause,
    death_certificate,
    notes,
  }: IcreateObituaryDTO): Promise<Obituary> {
    const obituary = new Obituary();

    Object.assign(obituary, {
      person_id,
      death_date,
      block,
      temporary_grave_number,
      final_grave_number,
      death_cause,
      death_certificate,
      notes
    });

    this.obituaries.push(obituary);

    return obituary;
  }
}  

export { ObituaryRepositoryInMemory }


  