import { MongoClient, type Db } from "mongodb";

// Read connection details from env vars
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}
if (!dbName) {
  throw new Error("Missing MONGODB_DB environment variable");
}

// Ensure the client is a singleton across hot reloads in Next.js (dev)
const globalForMongo = globalThis as unknown as {
  _mongoClient?: MongoClient;
};

export const client: MongoClient =
  globalForMongo._mongoClient ?? new MongoClient(uri);

if (!globalForMongo._mongoClient) {
  globalForMongo._mongoClient = client;
}

// We can get a Db without awaiting connect(); the driver connects lazily.
export const db: Db = client.db(dbName);

// Optional helper if you need to force a connection in some flows
export async function connectMongo() {
  if ((client as any).topology?.isConnected?.()) return client;
  return client.connect();
}

export type { Db } from "mongodb";
