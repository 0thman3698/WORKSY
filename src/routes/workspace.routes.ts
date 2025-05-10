import express from 'express';
import { createWorkspace, getMyWorkspaces } from '../controllers/workspace.controllers';
import { protect } from '../middlewares/protect';
import { restrictTo } from '../middlewares/restrictTo';
const router = express.Router();

router.post('/', protect, createWorkspace)
router.get('/', protect, getMyWorkspaces)



export default router;
