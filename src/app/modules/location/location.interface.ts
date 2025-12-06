import { Types } from "mongoose";

export type TDivision = {
  name: string;
  isDeleted: boolean;
};

export type TDistrict = {
  division: Types.ObjectId;
  name: string;
  isDeleted: boolean;
};

export type TUpaZila = {
  division: Types.ObjectId;
  district: Types.ObjectId;
  name: string;
  isDeleted: boolean;
};
