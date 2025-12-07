import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TDistrict, TDivision, TUpaZila } from "./location.interface";
import { District, Division, UpaZila } from "./location.model.";

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

const createDistrictIntoDB = async (payload: TDistrict) => {
  const isDivisionExists = await Division.findById(payload.division);

  if (!isDivisionExists) {
    throw new AppError(httpStatus.NOT_FOUND, "Division not found");
  }

  const result = await District.create(payload);

  return result;
};

const allDistrictsFromDB = async () => {
  const result = await District.find();

  return result;
};

const updateDistrictIntoDB = async (
  id: string,
  payload: Partial<TDistrict>
) => {
  const isDistrict = await District.findById(id).populate("division");

  if (!isDistrict) {
    throw new AppError(httpStatus.NOT_FOUND, "District not found");
  }
  const isDivision = await Division.findById(isDistrict.division);

  if (!isDivision) {
    throw new AppError(httpStatus.NOT_FOUND, "District not found");
  }

  const result = await District.findByIdAndUpdate(isDistrict._id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const allDistrictsByDivisionFromDB = async (id: string) => {
  const isDivision = await Division.findById(id);

  if (!isDivision) {
    throw new AppError(httpStatus.NOT_FOUND, "Division not found");
  }

  const result = await Division.find({ division: isDivision._id });

  return result;
};

const createUpaZilaIntoDB = async (payload: TUpaZila) => {
  const isDistrict = await District.findById(payload.district);

  if (!isDistrict) {
    throw new AppError(httpStatus.NOT_FOUND, "This District not found");
  }

  const isDivision = isDistrict.division;

  if (!isDivision) {
    throw new AppError(httpStatus.NOT_FOUND, "Division not found");
  }

  const result = await UpaZila.create(payload);

  return result;
};

const updateUpZilaIntoDB = async (id: string, payload: Partial<TUpaZila>) => {
  const isUpazila = await UpaZila.findById(id);

  if (!isUpazila) {
    throw new AppError(httpStatus.NOT_FOUND, "This upazila not found");
  }

  const isDistrict = isUpazila.district;

  if (!isDistrict) {
    throw new AppError(httpStatus.NOT_FOUND, "This District not found");
  }

  const isDivision = isUpazila.division;

  if (!isDivision) {
    throw new AppError(httpStatus.NOT_FOUND, "This division not found");
  }

  const result = await UpaZila.findByIdAndUpdate(isUpazila._id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

export const LocationServices = {
  createDivisionIntoDB,
  allDivisionFromDB,
  updateDivisionIntoDB,
  createDistrictIntoDB,
  allDistrictsFromDB,
  updateDistrictIntoDB,
  allDistrictsByDivisionFromDB,
  createUpaZilaIntoDB,
  updateUpZilaIntoDB,
};
