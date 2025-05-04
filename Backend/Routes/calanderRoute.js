import { Router } from "express";
import { addCalander, allevents, singleEventByCalander } from "../controller/calanderController.js";


const router= Router()

router.post("/addcalander/:course_id",addCalander);
router.get("/allcalanders",allevents)
router.get("/singlecalanderdetail/:calander_id",singleEventByCalander)

export default router