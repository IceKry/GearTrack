import express from "express";
import { regitsClient } from "./client.controller.js";

const api = express.Router();

api.post("/regist", regitsClient);

export default api;
