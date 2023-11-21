import  express  from "express";
import { AuthController } from "../controller/AuthController.js";
const router = express.Router();
// import authenticateToken from "../Middlewares/authenticateToken"
router.post("/" ,    AuthController)


export default router;