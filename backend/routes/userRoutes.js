import express from 'express';
const router = express.Router();
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';


router.post('/auth', authUser)
router.post('/', registerUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect,getUserProfile).put(protect, updateUserProfile)

export default router

 
 // - **POST /api/users** - REGISTER A USER
 // - **POST /api/users/auth** - AUTHENTICATE A USER AND GET TOKEN
 // - **POST /api/users/logout** - LOGOUT A USER AND CLEAR COOKIE
 // - **GET /api/users/profile** - GET USER PROFILE
 // - **PUT /api/users/profile** - UPDATE PROFILE 