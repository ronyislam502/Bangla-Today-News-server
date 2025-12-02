import { z } from "zod";

const createCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string({
      invalid_type_error: "title must be string",
    }),
  }),
});

const updateCategoryValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
  }),
});

export const CategoryValidations = {
  createCategoryValidationSchema,
  updateCategoryValidationSchema,
};
