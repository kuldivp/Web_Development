import express from 'express';
import { testpostcontroller } from '../controllers/test_controller.js';

// Create router object
const router = express.Router();

// Define routes
router.post('/test-post', testpostcontroller);

export default router;
