import { Router } from "express";
import { addCalander } from "../controller/calanderController.js";


const router= Router()

router.post("/addcalander/:course_id",addCalander);

export default router