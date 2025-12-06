import { z } from "zod";

const createDivisionSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Division name is required"),
  }),
});

const updateDivisionSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

const createDistrictSchema = z.object({
  body: z.object({
    division: z.string(),
    name: z.string().min(1, "District name is required").max(200),
  }),
});

const updateDistrictSchema = z.object({
  body: z.object({
    division: z.string().optional(),
    name: z.string().optional(),
  }),
});

const createUpaZilaSchema = z.object({
  body: z.object({
    division: z.string(),
    district: z.string(),
    name: z.string().min(1, "UpaZila name is required"),
  }),
});

const updateUpaZilaSchema = z.object({
  body: z.object({
    division: z.string().optional(),
    district: z.string().optional(),
    name: z.string().optional(),
  }),
});

export const LocationValidations = {
  createDivisionSchema,
  createDistrictSchema,
  createUpaZilaSchema,
  updateDivisionSchema,
  updateDistrictSchema,
  updateUpaZilaSchema,
};
