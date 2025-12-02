import httpStatus from "http-status";
import catchAsync from "../../utilities/catchAsync";
import sendResponse from "../../utilities/sendResponse";
import { EditorServices } from "./editor.service";

const AllEditors = catchAsync(async (req, res) => {
  const result = await EditorServices.allEditorsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Editors retrieved successfully",
    meta: result?.meta,
    data: result?.data,
  });
});

export const EditorControllers = {
  AllEditors,
};
