import express from "express";
import { v4 as uuidv4 } from "uuid";

import { Estimation } from "../model/Estimation.js";

const estimationRouter = express.Router();

estimationRouter.get("/", async (req, res) => {
    const allEstimation = await Estimation.find({});
    res.status(200).json(allEstimation);
});

estimationRouter.post("/", async (req, res) => {
    const estimation = new Estimation({ ...req.body, id: uuidv4() });
    await estimation.save();
    res.status(201).send("ok");
});

estimationRouter.delete("/:id", async (req, res) => {
    console.log("asdf");
    const id = req.params.id;
    console.log(id);
    const d = await Estimation.deleteOne({ id: id });
    console.log("deleted", d);
    res.status(200).send("ok");
});

export default estimationRouter;
