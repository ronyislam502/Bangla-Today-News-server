import { Schema, model } from "mongoose";

import { TDistrict, TDivision, TUpaZila } from "./location.interface";

const DivisionSchema = new Schema<TDivision>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Division = model<TDivision>("Division", DivisionSchema);

const DistrictSchema = new Schema<TDistrict>(
  {
    division: {
      type: Schema.Types.ObjectId,
      ref: "Division",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const District = model<TDistrict>("District", DistrictSchema);

const UpazilaSchema = new Schema<TUpaZila>(
  {
    division: {
      type: Schema.Types.ObjectId,
      ref: "Division",
      required: true,
    },

    district: {
      type: Schema.Types.ObjectId,
      ref: "District",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const UpaZila = model<TUpaZila>("UpaZila", UpazilaSchema);
