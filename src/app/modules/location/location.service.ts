import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TDivision } from "./location.interface";
import { Division } from "./location.model.";

const createDivisionIntoDB = async (payload: TDivision) => {
  const result = await Division.create(payload);

  return result;
};

const allDivisionFromDB = async () => {
  const result = await Division.find();

  return result;
};

const updateDivisionIntoDB = async (
  id: string,
  payload: Partial<TDivision>
) => {
  const isDivisionExists = await Division.findById(id);

  if (!isDivisionExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Division not found");
  }

  const result = await Division.findByIdAndUpdate(
    isDivisionExists._id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const LocationServices = {
  createDivisionIntoDB,
  allDivisionFromDB,
  updateDivisionIntoDB,
};
