import {IObituaryRepository} from '../../repositories/IObituaryRepository';
import {Obituary } from '../../entities/Obituary';
import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../database/errors/AppError';

@injectable()
class FindObituaryByFinalGraveNumberUseCase{
  constructor (
    @inject("ObituaryRepository") 
    private obituaryRepository: IObituaryRepository){}

  async execute({final_grave_number}): Promise <Obituary|null> {
    const obituaryByFinalGraveNumber = await this.obituaryRepository.findObituaryByFinalGraveNumber(final_grave_number);

    if (!obituaryByFinalGraveNumber){
      throw new AppError ("Obituary not found!")
    }
    return obituaryByFinalGraveNumber;
      
    
  }
}

export {FindObituaryByFinalGraveNumberUseCase}