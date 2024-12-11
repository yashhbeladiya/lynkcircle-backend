import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getWorkDetails,
  createWorkDetail,
  updateWorkDetail,
  deleteWorkDetail,
  getWorkDetailsbyId,
    deleteWorkDetailbyId,
  getJobPortfolioForService,
  createJobPortfolio,
  updateJobPortfolio,
  deleteJobPortfolio,
  getJobPortfolioById,
} from "../controllers/workDetail.controller.js";

const router = express.Router();

router.get("/:username", protectRoute, getWorkDetails);
router.post("/", protectRoute, createWorkDetail);
router.put("/update", protectRoute, updateWorkDetail);
router.delete("/delete", protectRoute, deleteWorkDetail);
router.delete("/delete/:id", protectRoute, deleteWorkDetailbyId);
router.get("/id/:id", protectRoute, getWorkDetailsbyId);


// jobportfolio routes
router.get("/jobportfolio/:serviceId", protectRoute, getJobPortfolioForService);
router.post("/jobportfolio", protectRoute, createJobPortfolio);
router.put("/jobportfolio", protectRoute, updateJobPortfolio);
router.delete("/jobportfolio/:id", protectRoute, deleteJobPortfolio);
router.get("/jobportfolio/id/:id", protectRoute, getJobPortfolioById);

export default router;
