import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

router.post('/auth', authUser)

export default router

 
 
 
 
 
 
 // - **POST /api/users** - REGISTER A USER
 // - **POST /api/users/auth** - AUTHENTICATE A USER AND GET TOKEN
 // - **POST /api/users/logout** - LOGOUT A USER AND CLEAR COOKIE
 // - **GET /api/users/profile** - GET USER PROFILE
 // - **PUT /api/users/profile** - UPDATE PROFILE 