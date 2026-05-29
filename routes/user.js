import express from "express";
const route = express.Router();

import { createUser } from "../controllers/userControllers.js";

route.post("/", createUser);

export default route;