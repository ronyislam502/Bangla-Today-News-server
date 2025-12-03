import mongoose from "mongoose";
import QueryBuilder from "../../builder/queryBuilder";
import { Editor } from "./editor.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { User } from "../user/user.model";

const allEditorsFromDB = async (query: Record<string, unknown>) => {
  const adminQuery = new QueryBuilder(
    Editor.find().populate("user", "role password status needsPasswordChange"),
    query
  )
    .search([])
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await adminQuery.countTotal();
  const data = await adminQuery.modelQuery;

  return { meta, data };
};

const singleEditorFromDB = async (id: string) => {
  const result = await Editor.findById(id);

  return result;
};

const deleteEditorFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    const deletedEditor = await Editor.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedEditor) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete editor");
    }

    const userId = deletedEditor.user;
    const deletedUser = await User.findByIdAndUpdate(
      userId,
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user");
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedEditor;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const EditorServices = {
  allEditorsFromDB,
  singleEditorFromDB,
  deleteEditorFromDB,
};
