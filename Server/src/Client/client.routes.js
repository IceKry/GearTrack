import express from "express";
import { regitsClient, updateClient, deleteClient, getActiveClients } from "./client.controller.js";

const api = express.Router();

api.post("/regist", regitsClient);
api.put('/update/:clienteID', updateClient)
api.delete('/delete/:clienteID', deleteClient)
api.get('/getActive/', getActiveClients)

export default api;
