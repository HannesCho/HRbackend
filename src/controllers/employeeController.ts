import { Request, Response } from "express";
import User from "../models/User";
import Employee from "../models/Employee";

export const employeeList = async (req: Request, res: Response) => {
  try {
    const allEmployees = await Employee.find();
    return res.status(200).json(allEmployees);
  } catch (error) {
    return res.status(400).json({
      errorMessage: error,
    });
  }
};

export const signupEmployee = async (req: Request, res: Response) => {
  const {
    firstName,
    lastName,
    email,
    street,
    housenumber,
    zipcode,
    city,
    country,
    role,
  } = req.body;

  const existsUser = await User.exists({ $or: [{ email }] });
  if (existsUser) {
    return res.status(403).json({
      errorMessage: "This email is already taken.",
    });
  }

  const existsEmployee = await Employee.exists({ $or: [{ email }] });
  if (existsEmployee) {
    return res.status(403).json({
      errorMessage: "This email is already taken.",
    });
  }

  try {
    const createdEmployee = await Employee.create({
      firstName,
      lastName,
      email,
      street,
      housenumber,
      zipcode,
      city,
      country,
      role,
    });
    res.status(200).json({ createdEmployee });
  } catch (error) {
    return res.status(400).json({
      errorMessage: "Server Error",
    });
  }
};
