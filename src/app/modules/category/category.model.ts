import { model, Schema } from "mongoose";
import { TCategory, TSubCategory } from "./category.interface";

const CategorySchema = new Schema<TCategory>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Category = model<TCategory>("Category", CategorySchema);

const SubCategorySchema = new Schema<TSubCategory>(
  {
    category: {
      type: Schema.Types.ObjectId,
      required: [true, "category is required"],
      unique: true,
      ref: "Category",
    },
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const SubCategory = model<TSubCategory>(
  "SubCategory",
  SubCategorySchema
);
