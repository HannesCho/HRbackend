import express from "express";
import {
  employeeList,
  signupEmployee,
} from "../controllers/employeeController";
import extractJWT from "../middleware/extractJWT";

const employeeRouter = express.Router();

employeeRouter.get("/", extractJWT, employeeList);
employeeRouter.post("/", signupEmployee);

export default employeeRouter;
