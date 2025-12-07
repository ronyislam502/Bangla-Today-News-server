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

export const DivisionControllers = {
  createDivision,
  allDivisions,
};
