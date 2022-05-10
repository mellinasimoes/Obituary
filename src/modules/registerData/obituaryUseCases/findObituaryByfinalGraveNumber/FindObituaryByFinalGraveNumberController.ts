import { Request, Response } from "express";
import { FindObituaryByFinalGraveNumberUseCase } from "./FindObituaryByFinalGraveNumerUseCase";
import { container } from "tsyringe";

class FindObituaryByFinalGraveNumberController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { final_grave_number } = request.headers;

    const findObituaryByFinalGraveNumberUseCase = container.resolve(FindObituaryByFinalGraveNumberUseCase);

    const obituaryByFinalGraveNumber = await findObituaryByFinalGraveNumberUseCase.execute({ final_grave_number });

    return response.json(obituaryByFinalGraveNumber);
  }
}

export { FindObituaryByFinalGraveNumberController };
