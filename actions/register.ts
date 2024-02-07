// First thing you must do is to market as a server
"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // Validate values on the server
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "Your account has been created successfully!" };
};
