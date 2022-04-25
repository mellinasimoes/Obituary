import {Request,Response} from 'express';
import {ListPersonByMothersNameUseCase} from "./ListPersonByMothersNameUseCase";
import {container} from "tsyringe"

class ListPersonByMothersNameController{


  async handle(request:Request,response:Response): Promise<Response>{
    const {mothers_name}=request.headers;

    const listPersonByMothersNameUseCase = container.resolve(ListPersonByMothersNameUseCase);

    const personByMothersName = await listPersonByMothersNameUseCase.execute({mothers_name});

    return response.json(personByMothersName);  
  }
}

export {ListPersonByMothersNameController}