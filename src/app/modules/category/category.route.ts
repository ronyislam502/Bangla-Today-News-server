import { Router } from "express";
import { CategoryControllers } from "./category.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { CategoryValidations } from "./category.validation";

const router = Router();

router.post(
  "/create-category",
  validateRequest(CategoryValidations.createCategoryValidationSchema),
  CategoryControllers.createCategory
);

router.post(
  "/create-subcategory",
  validateRequest(CategoryValidations.createSubCategoryValidationSchema),
  CategoryControllers.createSubCategory
);

router.get("/", CategoryControllers.allCategories);

router.get("/", CategoryControllers.allSubCategories);

router.patch("/update/:id", CategoryControllers.updateCategory);

router.patch("/update-sub/:id", CategoryControllers.updateSubCategory);

export const CategoryRoutes = router;
