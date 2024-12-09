import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getSuggestedConnections,
  getPublicProfile,
  updateProfile,
    connectUser,
    followClient,
    disconnectUser,
    unfollowClient,
    getUserConnections,
    getUserFollowers,
    getUserFollowing,
  deleteAccount,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/suggestions", protectRoute, getSuggestedConnections);
router.get("/profile/:username", protectRoute, getPublicProfile);

router.put("/profile", protectRoute, updateProfile);

router.post("/connect/:username", protectRoute, connectUser);
router.post("/follow/:clientname", protectRoute, followClient);
router.delete("/disconnect/:username", protectRoute, disconnectUser);
router.delete("/unfollow/:clientname", protectRoute, unfollowClient);
router.get("/connections", protectRoute, getUserConnections);
router.get("/followers", protectRoute, getUserFollowers);
router.get("/following", protectRoute, getUserFollowing);
router.delete("/delete-account", protectRoute, deleteAccount);

export default router;
