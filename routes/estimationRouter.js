import express from "express";
import { Estimation } from "../model/Estimation.js";

const estimationRouter = express.Router();

estimationRouter.post("/", (req, res) => {
    const est = new Estimation(req.body);

    est.save();
    res.status(201).send("inquiry registered");
});

export default estimationRouter;
