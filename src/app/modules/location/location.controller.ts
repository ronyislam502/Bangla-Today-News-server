import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { LocationServices } from "./location.service";

const createDivision = catchAsync(async (req, res) => {
  const result = await LocationServices.createDivisionIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Division created successfully",
    data: result,
  });
});

const allDivisions = catchAsync(async (req, res) => {
  const result = await LocationServices.allDivisionFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Divisions retrieved successfully",
    data: result,
  });
});

const updateDivision = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LocationServices.updateDivisionIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Division updated successfully",
    data: result,
  });
});

const createDistrict = catchAsync(async (req, res) => {
  const result = await LocationServices.createDistrictIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "District created successfully",
    data: result,
  });
});

const allDistrictsByDivision = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LocationServices.allDistrictsByDivisionFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Districts by division retrieved successfully",
    data: result,
  });
});

const createUpaZila = catchAsync(async (req, res) => {
  const result = await LocationServices.createUpaZilaIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "UpaZila created successfully",
    data: result,
  });
});

const updateUpaZila = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LocationServices.updateUpZilaIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Upazila updated successfully",
    data: result,
  });
});

const allUpazilasByDistrict = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await LocationServices.allUpaZilasByDistrictFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Upazilas by district successfully",
    data: result,
  });
});

export const LocationControllers = {
  createDivision,
  allDivisions,
  updateDivision,
  createDistrict,
  allDistrictsByDivision,
  createUpaZila,
  updateUpaZila,
  allUpazilasByDistrict,
};
