import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
    id: String,
    date: String,
    title: String,
    date: String,
    content: String,
    image: {
        data: Buffer,
        contentType: String,
    },
});

export const News = mongoose.model("news", newsSchema);
