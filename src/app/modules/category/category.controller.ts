import httpStatus from "http-status";
import sendResponse from "../../utilities/sendResponse";
import { CategoryServices } from "./category.service";
import catchAsync from "./../../utilities/catchAsync";

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category created successfully",
    data: result,
  });
});

const allCategories = catchAsync(async (req, res) => {
  const result = await CategoryServices.allCategoriesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved successfully",
    data: result,
  });
});

const updateCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.updateCategoryIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Category updated successfully",
    data: result,
  });
});

// sub category

const createSubCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createSubCategoryIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "SubCategory created successfully",
    data: result,
  });
});

const allSubCategories = catchAsync(async (req, res) => {
  const result = await CategoryServices.allSubCategoriesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "SubCategories retrieved successfully",
    data: result,
  });
});

const updateSubCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CategoryServices.updateSubCategoryIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Sub Category updated successfully",
    data: result,
  });
});

export const CategoryControllers = {
  createCategory,
  allCategories,
  updateCategory,
  // sub category
  createSubCategory,
  allSubCategories,
  updateSubCategory,
};
