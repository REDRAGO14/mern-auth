import express from "express";
import { test } from "../controler/user.controler.js";

const router = express.Router();

router.get('/',test);

export default router;