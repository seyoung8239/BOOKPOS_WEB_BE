import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import estimationRouter from "./routes/estimationRouter.js";
import newsRouter from "./routes/newsRouter.js";

const app = express();
const port = 4000;

connectDB().catch((err) => console.log(err));
async function connectDB() {
    await mongoose.connect(
        process.env.DB_PATH,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        () => console.log("db connected")
    );
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/estimation", estimationRouter);
app.use("/news", newsRouter);

app.listen(process.env.PORT, () => {
    console.log(`server start on port: ${process.env.PORT}`);
});
