import { Router } from "express";
import addCourse from "../controller/courseController.js";
const router= Router();


router.post("/addcourse",addCourse)

export default router;