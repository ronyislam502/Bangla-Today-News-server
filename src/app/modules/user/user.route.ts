import express from "express";
import { UserControllers } from "./user.controller";
import { multerUpload } from "../../config/multer.config";
import { parseBody } from "../../middlewares/bodyParser";
import { validateRequest } from "../../middlewares/validateRequest";
import { AdminValidations } from "../admin/admin.validation";
import { EditorValidations } from "../editor/editor.validation";

const router = express.Router();

router.post(
  "/create-admin",
  multerUpload.single("image"),
  parseBody,
  validateRequest(AdminValidations.createAdminValidationSchema),
  UserControllers.createAdmin
);

router.post(
  "/create-editor",
  multerUpload.single("image"),
  parseBody,
  validateRequest(EditorValidations.createEditorValidationSchema),
  UserControllers.createEditor
);

router.get("/", UserControllers.getAllUsers);

export const UserRoutes = router;
