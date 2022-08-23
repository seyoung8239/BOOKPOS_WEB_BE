import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import estimationRouter from "./routes/estimationRouter.js";

const app = express();
const port = 4000;
const url =

connectDB().catch((err) => console.log(err));
async function connectDB() {
    await mongoose.connect(
        url,
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

app.listen(port, () => {
    console.log(`server start on port: ${port}`);
});
