import "./db";
import "./models/User";
import "./models/Comment";
import express, { Request, Response } from "express";
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

app.use("/api/", rootRouter);
app.use("/api/user", userRouter);
app.use("/api/comment", commentRouter);
app.use("/api/employee", employeeRouter);

app.get("/", (req: Request, res: Response) => {
  console.log("Get Response");
  res.send("Hello");
});

const handleListening = () =>
  console.log(
    `✅ Server listenting on port http://localhost:${config.server.port}`
  );

app.listen(config.server.port, handleListening);
