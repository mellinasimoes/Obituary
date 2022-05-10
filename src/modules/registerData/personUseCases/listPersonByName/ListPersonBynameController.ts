import { Request, Response } from "express";
import { ListPersonByNameUseCase } from "./ListPersonBynameUseCase";
import { container } from "tsyringe";

class ListPersonByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.headers;

    const listPersonByNameUseCase = container.resolve(ListPersonByNameUseCase);

    const personByName = await listPersonByNameUseCase.execute({ name });

    return response.json(personByName);
  }
}

export { ListPersonByNameController };
