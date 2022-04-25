import {IPersonRepository} from '../../repositories/IPersonRepository';
import {Person } from '../../entities/Person';
import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../database/errors/AppError';

@injectable()
class ListPersonByMothersNameUseCase{
  constructor (
    @inject("PersonRepository") 
    private personRepository: IPersonRepository){}

  async execute({mothers_name}): Promise <Person[]|null> {
    const listPersonByMothersName = await this.personRepository.findByMothersName(mothers_name);

    if (!listPersonByMothersName){
      throw new AppError ("Person not found!")
    }
    return listPersonByMothersName;
      
    
  }
}

export {ListPersonByMothersNameUseCase}