import { Router } from "express";

import { CategoryRepositories } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepositories();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlredyExists = categoriesRepository.findByName(name);

  if (categoryAlredyExists) {
    return response.status(400).json({ error: "Category alredy exists!" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
