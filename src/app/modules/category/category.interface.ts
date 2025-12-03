import { Types } from "mongoose";

export type TCategory = {
  title: string;
  isDeleted: boolean;
};

export type TSubCategory = {
  category: Types.ObjectId;
  name: string;
  isDeleted: boolean;
};
