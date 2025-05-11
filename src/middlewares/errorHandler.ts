import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/apiError";
import { ZodError } from "zod";

export const errorHandler = (err: any, req: Request, res: Response,next:NextFunction) => {
    
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || [],
    });
  } 

  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => e.message).join(", ");
    return res.status(400).json({
      success: false,
      message: `Validation failed: ${formattedErrors}`,
      errors: err.errors,
    });
  }

  return res.status(500).json({
    success: false,
    message: err.message || "Something went wrong",
    errors: [],
  });
};
