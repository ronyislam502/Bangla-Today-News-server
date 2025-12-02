import httpStatus from "http-status";
import QueryBuilder from "../../builder/queryBuilder";
import { User } from "./user.model";
import { TAdmin } from "../admin/admin.interface";
import { TImageFile } from "../../interface/image.interface";
import { TUser } from "./user.interface";
import config from "../../config";
import mongoose from "mongoose";
import AppError from "../../errors/AppError";
import { Admin } from "../admin/admin.model";
import { USER_ROLE, UserSearchableFields } from "../../utilities/constant";
import { TEditor } from "../editor/editor.interface";
import { Editor } from "../editor/editor.model";

const createAdminIntoDB = async (
  image: TImageFile,
  password: string,
  payload: TAdmin
) => {
  const userData: Partial<TUser> = {
    name: payload.name,
    email: payload.email,
    password: password || (config.default_password as string),
    role: USER_ROLE?.ADMIN,
  };

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    if (image && image.path) {
      payload.avatar = image.path;
    }

    const newUser = await User.create([userData], { session });

    if (!newUser?.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    payload.user = newUser[0]._id;

    const newAdmin = await Admin.create([payload], { session });
    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create admin");
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const createEditorIntoDB = async (
  image: TImageFile,
  password: string,
  payload: TEditor
) => {
  const userData: Partial<TUser> = {
    name: payload.name,
    email: payload.email,
    password: password || (config.default_password as string),
    role: USER_ROLE?.EDITOR,
  };

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    if (image && image.path) {
      payload.avatar = image.path;
    }

    const newUser = await User.create([userData], { session });

    if (!newUser?.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
    }

    payload.user = newUser[0]._id;

    const newEditor = await Editor.create([payload], { session });
    if (!newEditor.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create editor");
    }

    await session.commitTransaction();
    await session.endSession();

    return newEditor;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .search(UserSearchableFields)
    .fields()
    .paginate()
    .sort()
    .filter();

  const meta = await userQuery.countTotal();
  const data = await userQuery.modelQuery;

  return {
    meta,
    data,
  };
};

export const UserServices = {
  createAdminIntoDB,
  createEditorIntoDB,
  getAllUsersFromDB,
};
