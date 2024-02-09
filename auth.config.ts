import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    credentials({
      async authorize(credentials, request) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatches = await bcrypt.compare(password, user.password);

          if (passwordMatches) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
