import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/apiResponse';
import { fileService } from '../services/file.service';
import { ApiError } from '../utils/apiError';

export default class FileControllers {

  // Expects single file via multer
  static async uploadFile(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        throw ApiError.badRequest('No file uploaded.');
      }

      const userId = req.user.id; 
      const messageId = req.body.messageId; // (Optional) Link file to a message

      const uploadedFile = await fileService.uploadFile(req.file, userId, messageId);
      return new ApiResponse(res).created(uploadedFile, 'File uploaded successfully');
    } catch (error) {
      next(error);
    }
  }

  // Retrieves file metadata for preview/display.
  static async getFileMetadata(req: Request, res: Response, next: NextFunction) {
    try {
      const { fileId } = req.params;
      const userId = req.user.id;

      const file = await fileService.getFileMetadata(fileId, userId);
      return new ApiResponse(res).success(file, 'File metadata fetched successfully');
    } catch (error) {
      next(error);
    }
  }

  // Redirects to the file's download URL.
  static async downloadFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { fileId } = req.params;
      const userId = "55f44e96-03e6-4ffa-bace-16a8fc223701"

      const file = await fileService.getFileMetadata(fileId, userId);
      console.log(file);
      // return new ApiResponse(res).success("yes") //for testing
      res.redirect(file.url); // Redirect to the Cloudinary download URL(بس مش شغال)
    } catch (error) {
      next(error);
    }
  }

  // 
  static async deleteFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { fileId } = req.params;
      const userId = req.user.id;

      const deletedFile = await fileService.deleteFile(fileId, userId);
      return new ApiResponse(res).success(deletedFile, 'File deleted successfully');
    } catch (error) {
      next(error);
    }
  }
}
