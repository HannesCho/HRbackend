import "./db";
import "./models/User";
import "./models/Comment";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config/config";
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import commentRouter from "./router/commentRouter";
import employeeRouter from "./router/employeeRouter";

const app = express();
const logger = morgan("dev");

app.use(cors());

app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/comment", commentRouter);
app.use("/employee", employeeRouter);

const handleListening = () =>
  console.log(
    `✅ Server listenting on port http://localhost:${config.server.port}`
  );

app.listen(config.server.port, handleListening);
