import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db, client } from "@/db"; // Mongo Db and client

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
});
