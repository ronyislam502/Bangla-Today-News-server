import { Router } from "express";
import { LocationControllers } from "./location.controller";

const router = Router();

router.post("/create-division", LocationControllers.createDivision);

router.post("/create-district", LocationControllers.createDistrict);

router.post("/create-upazila", LocationControllers.createUpaZila);

router.get("/", LocationControllers.allDivisions);

router.get(
  "/district-by-division/:id",
  LocationControllers.allDistrictsByDivision
);

router.get(
  "/upazila-by-district/:id",
  LocationControllers.allUpazilasByDistrict
);

router.patch("/update", LocationControllers.updateDivision);

router.patch("/update", LocationControllers.updateDivision);

export const LocationRoutes = router;
