
import  express  from "express";
import { setRegisterUser } from "../controller/RegisterUser.js";

const router = express.Router();

router.post("/" , setRegisterUser);


export default router;