// userRoutes.js
import express from 'express';
import { setRegisterUser  } from '../controller/RegisterUser.js'; 

import {loginUser} from "../controller/loginUser.js";
import { resendVerificationEmail } from '../controller/ResendVerificationController.js';

const router = express.Router();

// Registration route
router.post('/registration', setRegisterUser); // Handles POST /registration

// Email verification route


// Login route
router.post('/login', loginUser); // Handles POST /login


router.post('/resend-verification', resendVerificationEmail);


export default router;
