import { Router } from "express";
import { EditorControllers } from "./editor.controller";

const router = Router();

router.get("/", EditorControllers.AllEditors);

export const EditorRoutes = router;
