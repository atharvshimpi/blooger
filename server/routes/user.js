import express from "express";
const router = express.Router();

import { signin, signup, googlesignin } from "../controllers/user.js";

// Normal Signin/Signup
router.post("/signin", signin);
router.post("/signup", signup);

// Google Signin
router.post("/googlesignin", googlesignin);

export default router;