import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3, { message: "Name must be at least 3 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  universityId: z.coerce.number().min(1, { message: "University ID is required" }),
  universityCard: z.string().nonempty({ message: "University card is required" }),
});

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});
