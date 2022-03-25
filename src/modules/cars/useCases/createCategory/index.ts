import { CategoryRepositories } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";


const categoriesRepository = CategoryRepositories.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController }