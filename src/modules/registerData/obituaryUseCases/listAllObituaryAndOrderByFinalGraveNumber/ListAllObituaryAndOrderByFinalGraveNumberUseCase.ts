import { inject, injectable } from 'tsyringe';
import { Obituary } from '../../entities/Obituary';
import { IObituaryRepository } from '../../repositories/IObituaryRepository';

@injectable()
class ListAllObituaryAndOrderByFinalGraveNumberUseCase{
  constructor (
    @inject("ObituaryRepository")  
    private obituaryRepository: IObituaryRepository){}

  async execute(): Promise <Obituary[]|null> {
    const listAllObituaryAndOrderByFinalGraveNumber = await this.obituaryRepository.listAllObituaryByFinalGraveNumber()
    
    return listAllObituaryAndOrderByFinalGraveNumber; 
  }
}

export { ListAllObituaryAndOrderByFinalGraveNumberUseCase };
