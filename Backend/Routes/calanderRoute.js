import { Router } from "express";
import { addCalander, allevents } from "../controller/calanderController.js";


const router= Router()

router.post("/addcalander/:course_id",addCalander);
router.get("/allcalanders",allevents)

export default router