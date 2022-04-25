import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../database/errors/AppError';
import { IObituaryRepository } from '../../repositories/IObituaryRepository';
import { Obituary } from '../../entities/Obituary';

@injectable()
class FindObituaryByPersonIdUseCase{
  constructor (
    @inject("ObituaryRepository")
    private obituaryRepository: IObituaryRepository
    ){}

  async execute({person_id}): Promise <Obituary|null> {
    const findObituaryByPersonId = await this.obituaryRepository.findObituaryByPersonId(person_id);

    if (!findObituaryByPersonId){
      throw new AppError ("Person Id not found!")
    }

    return findObituaryByPersonId;      
    
  }
}

export {FindObituaryByPersonIdUseCase}