import express from "express";
import { Estimation } from "../model/Estimation.js";

const estimationRouter = express.Router();

estimationRouter.post("/", (req, res) => {
    const estimation = new Estimation(req.body);

    estimation.save();
    res.status(201).send("inquiry registered");
});

estimationRouter.get("/", async (req, res) => {
    const allEstimation = await Estimation.find({});
    res.status(200).json(allEstimation);
});

export default estimationRouter;
