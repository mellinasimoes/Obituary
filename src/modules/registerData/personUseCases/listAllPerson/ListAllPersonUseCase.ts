import {IPersonRepository} from '../../repositories/IPersonRepository';
import {Person } from '../../entities/Person';
import { injectable, inject } from 'tsyringe';


@injectable()
class ListAllPersonUseCase{
  constructor (
    @inject("PersonRepository") 
    private personRepository: IPersonRepository){}

  async execute(): Promise <Person[] |null> {
    const listAllPerson = await this.personRepository.list();
            
    return listAllPerson;
  }
}

export {ListAllPersonUseCase}