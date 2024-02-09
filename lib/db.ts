import { PrismaClient } from "@prisma/client";

// This is for preventing creating too many prisma clients
declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
