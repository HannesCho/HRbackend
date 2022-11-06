import mongoose from "mongoose";
import config from "./config/config";

mongoose.connect(config.mongo.url);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error?: Error) => console.log("❌ DB Error", error);

db.on("error", handleError);
db.once("open", handleOpen);
