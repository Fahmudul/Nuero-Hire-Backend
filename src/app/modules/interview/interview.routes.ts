import { Router } from "express";
import { InterviewControlers } from "./interview.control";

const router = Router();

router.post("/create", InterviewControlers.createInterview);

export const InterviewRoutes = router;
