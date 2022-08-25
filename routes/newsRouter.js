import express from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

import { News } from "../model/News.js";

const newsRouter = express.Router();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

var upload = multer({ storage: storage });

newsRouter.get("/", async (req, res) => {
    const allNews = await News.find({});
    res.status(200).json(allNews);
});

newsRouter.get("/:id", async (req, res) => {
    const id = req.params.id;

    const news = await News.find({ id: id });
    res.status(200).json(news);
});

newsRouter.post("/", upload.single("image"), async (req, res) => {
    // TODO: 남아있는 파일 처리
    const img = fs.readFileSync(req.file.path);
    const imgData = Buffer.from(img).toString("base64");

    const image = {
        data: imgData,
        contentType: req.file.mimetype,
    };

    const news = new News({
        ...req.body,
        id: uuidv4(),
        image: image,
        date: new Date().toJSON(),
    });
    await news.save();
    res.status(201).send("ok");
});

newsRouter.put("/:id", async (req, res) => {
    const id = req.params.id;
    await News.updateOne({ id: id }, { res });
    res.status(200).send("ok");
});

newsRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await News.deleteOne({ id: id }).then((res) => console.log(res));
    res.status(200).send("ok");
});

export default newsRouter;
