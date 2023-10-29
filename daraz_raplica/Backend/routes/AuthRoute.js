import  express  from "express";
import { AuthControler } from "../controller/AuthControler.js";
const router = express.Router();
router.post("/" , AuthControler)

export default router;