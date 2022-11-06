import dotenv from "dotenv";

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/hrmanager";

const MONGO = {
  url: MONGO_URL,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
};

const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 4000;

const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || "hannesIssuer";
const SERVER_TOKEN_SECRET =
  process.env.SERVER_TOKEN_SECRET || "superencryptedsecret";

const SERVER = {
  port: SERVER_PORT,
  token: {
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET,
  },
};

const config = {
  mongo: MONGO,
  server: SERVER,
};

export default config;
