import { Router } from "express";
import { EditorControllers } from "./editor.controller";

const router = Router();

router.get("/", EditorControllers.allEditors);

router.get("/editor/:id", EditorControllers.singleEditor);

router.delete("/delete/:id", EditorControllers.deleteEditor);

export const EditorRoutes = router;
