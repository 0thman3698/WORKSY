import express from 'express';
import WorkspaceControllers from '../controllers/workspace.controllers';
import { protect } from '../middlewares/protect';
import { validate } from '../middlewares/validation.middleware';
import { workspaceSchema } from '../validators/workspace.validators';
import { asyncHandler } from '../middlewares/asyncHandler';
const router = express.Router();

router.post('/', protect, validate(workspaceSchema), asyncHandler(WorkspaceControllers.createWorkspace))
router.get('/', protect, asyncHandler(WorkspaceControllers.getMyWorkspaces) )
router.put('/:workspaceId', protect, asyncHandler(WorkspaceControllers.updateWorkspace))
router.delete('/:workspaceId', protect, asyncHandler(WorkspaceControllers.deleteWorkspace))



export default router;