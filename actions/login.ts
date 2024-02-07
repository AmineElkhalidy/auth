// First thing you must do is to market as a server
"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // Validate values on the server
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  return { success: "You are successfully authenticated!" };
};
