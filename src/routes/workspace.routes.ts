import express from 'express';
import WorkspaceControllers from '../controllers/workspace.controllers';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { workspaceSchema } from '../validators/workspace.validators';
import { asyncHandler } from '../middlewares/asyncHandler';
import { restrictTo } from '../middlewares/restrictTo';
const router = express.Router();

router.post('/', protect, validate(workspaceSchema), asyncHandler(WorkspaceControllers.createWorkspace))
router.get('/', protect, asyncHandler(WorkspaceControllers.getMyWorkspaces) )
router.put('/:workspaceId', protect, restrictTo("ADMIN"), asyncHandler(WorkspaceControllers.updateWorkspace))
router.delete('/:workspaceId', protect, restrictTo("ADMIN"), asyncHandler(WorkspaceControllers.deleteWorkspace))



export default router;