import express from "express";
import {adminRouter, userRouter} from "./routers";

const router = express.Router();

router.use("/admin", adminRouter)
router.use("/user", userRouter)
export default router
