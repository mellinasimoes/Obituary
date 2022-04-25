import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ListObituaryBetweenDateUseCase } from './ListObituaryBetweenDateUseCase';


class ListObituaryBetweenDateController{

  async handle(request:Request,response:Response): Promise<Response>{
    const {initial_date,final_date}=request.body
 
    const listObituaryBetweenDateUseCase = container.resolve(ListObituaryBetweenDateUseCase);

    const all = await listObituaryBetweenDateUseCase .execute({initial_date,final_date});

    return response.json(all);  
  }
}

export { ListObituaryBetweenDateController };
