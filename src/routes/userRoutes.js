import { Router } from "express";
const router = Router();
import { createUsers } from "../controllers/userController.js";

router.post("/",createUsers );

export default router;
