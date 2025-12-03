import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { EditorServices } from "./editor.service";

const allEditors = catchAsync(async (req, res) => {
  const result = await EditorServices.allEditorsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Editors retrieved successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

const singleEditor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EditorServices.singleEditorFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Editor retrieved successfully",
    data: result,
  });
});

const deleteEditor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EditorServices.deleteEditorFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Editor deleted successfully",
    data: result,
  });
});

export const EditorControllers = {
  allEditors,
  singleEditor,
  deleteEditor,
};
