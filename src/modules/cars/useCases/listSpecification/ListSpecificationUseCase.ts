import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";

import { Specification } from "../../entities/Specification";

class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specification = this.specificationRepository.list();
    return specification;
  }
}

export { ListSpecificationUseCase };
