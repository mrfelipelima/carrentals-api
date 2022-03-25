import { Request, Response } from 'express';
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {

    constructor(private listSpecificationuseCase: ListSpecificationUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listSpecificationuseCase.execute();
        return response.json(all);
    }
}

export { ListSpecificationController }