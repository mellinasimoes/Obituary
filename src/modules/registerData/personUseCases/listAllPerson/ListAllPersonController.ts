import { Request, Response } from "express";
import { ListAllPersonUseCase } from "./ListAllPersonUseCase";
import { container } from "tsyringe";

class ListPersonController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPersonUseCase = container.resolve(ListAllPersonUseCase);

    const all = await listPersonUseCase.execute();

    return response.json(all);
  }
}
export { ListPersonController };
