import { Request, Response } from "express";
import { CreateObituaryUseCase } from "./CreateObituaryUseCase";
import { container } from "tsyringe";

class CreateObituaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      person_id,
      death_date,
      block,
      temporary_grave_number,
      final_grave_number,
      death_cause,
      death_certificate,
      notes,
    } = request.body;

    const createObituaryUseCase = container.resolve(CreateObituaryUseCase);

    await createObituaryUseCase.execute({
      person_id,
      death_date,
      block,
      temporary_grave_number,
      final_grave_number,
      death_cause,
      death_certificate,
      notes,
    });

    return response.status(201).send("Obituary created");
  }
}

export { CreateObituaryController };
