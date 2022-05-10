import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllObituaryAndOrderByFinalGraveNumberUseCase } from "./ListAllObituaryAndOrderByFinalGraveNumberUseCase";

class ListAllObituaryAndOrderByFinalGraveNumberController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllObituaryAndOrderByFinalGraveNumberUseCase = container.resolve(
      ListAllObituaryAndOrderByFinalGraveNumberUseCase,
    );

    const all = await listAllObituaryAndOrderByFinalGraveNumberUseCase.execute();

    return response.json(all);
  }
}

export { ListAllObituaryAndOrderByFinalGraveNumberController };
