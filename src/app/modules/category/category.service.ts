import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TCategory, TSubCategory } from "./category.interface";
import { Category, SubCategory } from "./category.model";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);

  return result;
};

const allCategoriesFromDB = async () => {
  const result = await Category.find();

  return result;
};

const singleCategoryFromDB = async (id: string) => {
  const result = await Category.findById(id);

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

// sub category

const createSubCategoryIntoDB = async (payload: TSubCategory) => {
  const isCategoryExists = await Category.findById(payload?.category);

  if (!isCategoryExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Category not found");
  }
  const result = await SubCategory.create(payload);

  return result;
};

const allSubCategoriesFromDB = async () => {
  const result = await SubCategory.find().populate("category");

  return result;
};

const updateSubCategoryIntoDB = async (
  id: string,
  payload: Partial<TSubCategory>
) => {
  const isSubCategory = await SubCategory.findById(id);

  if (!isSubCategory) {
    throw new AppError(httpStatus.NOT_FOUND, "SubCategory not found");
  }

  const result = await SubCategory.findByIdAndUpdate(
    isSubCategory._id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  allCategoriesFromDB,
  singleCategoryFromDB,
  updateCategoryIntoDB,
  createSubCategoryIntoDB,
  allSubCategoriesFromDB,
  updateSubCategoryIntoDB,
};
