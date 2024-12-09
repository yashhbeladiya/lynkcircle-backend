import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getWorkDetails, createWorkDetail, updateWorkDetail, deleteWorkDetail } from "../controllers/workDetail.controller.js";

const router = express.Router();

router.get("/:username", protectRoute, getWorkDetails);
router.post("/", protectRoute, createWorkDetail);
router.put("/update", protectRoute, updateWorkDetail);
router.delete("/delete", protectRoute, deleteWorkDetail);

export default router;