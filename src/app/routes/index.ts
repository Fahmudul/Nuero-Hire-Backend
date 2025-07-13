import express from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { InterviewRoutes } from "../modules/interview/interview.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/interview",
    route: InterviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
