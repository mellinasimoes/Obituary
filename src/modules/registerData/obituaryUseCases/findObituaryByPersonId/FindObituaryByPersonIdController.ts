import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindObituaryByPersonIdUseCase } from "./FindObituaryByPersonIdUseCase";

class FindObituaryByPersonIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { person_id } = request.headers;

    const listObituaryByPersonIdUseCase = container.resolve(FindObituaryByPersonIdUseCase);

    const obituaryByPersonId = await listObituaryByPersonIdUseCase.execute({ person_id });

    return response.json(obituaryByPersonId);
  }
}

export { FindObituaryByPersonIdController };
