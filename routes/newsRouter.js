import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

import { News } from "../model/News.js";

const upload = multer({ dest: "uploads/" });

const newsRouter = express.Router();

newsRouter.get("/", async (req, res) => {
    const allNews = await News.find({});
    res.status(200).json(allNews);
});

newsRouter.post("/", (req, res) => {
    const news = new News({ ...req.body, id: uuidv4() });
    news.save();
    res.status(201).send("news registered");
});

newsRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    News.updateOne({ id: id }, { res });
    res.status(200).send("new updated");
});

newsRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    News.deleteOne({ id: id });
    res.status(200).send("new deleted");
});
