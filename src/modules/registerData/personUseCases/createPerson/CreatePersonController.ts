import {Request,Response} from 'express'
import {CreatePersonUseCase} from "./CreatePersonUseCase";
import {container} from "tsyringe"

class CreatePersonController{

   
  async handle(request:Request,response:Response): Promise<Response>{
    const {name,
      cpf,
      birth_date,
      birth_city,
      birth_state,
      citizenship,
      fathers_name,
      mothers_name,
      profession,
      race,
      notes}=request.body;

    const createPersonUseCase= container.resolve(CreatePersonUseCase);
   
    const personCreated= await createPersonUseCase.execute({name,
      cpf,
      birth_date,
      birth_city,
      birth_state,
      citizenship,
      fathers_name,
      mothers_name,
      profession,
      race,
      notes});

    return response.status(201).json(personCreated);
  }  
}

export {CreatePersonController}