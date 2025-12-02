import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);

  return result;
};

const AllCategoriesFromDB = async () => {
  const result = await Category.find().populate("department");

  return result;
};

const updateCategoryIntoDB = async (
  id: string,
  payload: Partial<TCategory>
) => {
  const isCategory = await Category.findById(id);

  if (!isCategory) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found");
  }

  const result = await Category.findByIdAndUpdate(isCategory._id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  AllCategoriesFromDB,
  updateCategoryIntoDB,
};
