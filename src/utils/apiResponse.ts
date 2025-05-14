import { Response } from 'express';
import httpStatus from 'http-status';

export class ApiResponse {
  constructor(private res: Response) {}

  success(data: any, message: string = 'Success') {
    return this.res.status(httpStatus.OK).json({
      success: true,
      message,
      data
    });
  }
  
  created(data: any, message: string = 'Resource created') {
    return this.res.status(httpStatus.CREATED).json({
      success: true,
      message,
      data
    });
  }

  noContent() {
    return this.res.status(httpStatus.NO_CONTENT).send();
  }
}