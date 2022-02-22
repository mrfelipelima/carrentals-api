import { Router } from "express";

import { CategoryRepositories } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createcategoryService = new CreateCategoryService(categoriesRepository);

  createcategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
