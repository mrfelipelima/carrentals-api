import { Specification } from "../model/Specification";

interface CreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({description, name}: CreateSpecificationDTO): void;
    list(): Specification[];
    findByName(name: string): Specification;
}

export { ISpecificationRepository, CreateSpecificationDTO }