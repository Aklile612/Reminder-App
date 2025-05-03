import { Router } from "express";
import {addCourse,findDepartment} from "../controller/courseController.js";
const router= Router();


router.post("/addcourse",addCourse)
router.get("/finddepartment/:department_id",findDepartment)

export default router;