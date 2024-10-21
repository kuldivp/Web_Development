import express from 'express'
import { register_controller } from '../controllers/auth_controller.js';

//router obj
const router = express.Router()

//routes
router.post('/register',register_controller)

export default router;