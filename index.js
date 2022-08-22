import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const { Schema } = mongoose;

const estSchema = new Schema({
    type: String,
    capacity: Number,

    company_name: String,
    company_representative: String,
    company_business_number: String,
    company_business_category: String,
    company_webpage: String,
    company_addrerss: String,
    company_writers: String,

    manager_name: String,
    manager_email: String,
    manager_cell: String,
    manager_phone: String,
    manager_hier: String,

    tax_name: String,
    tax_email: String,

    admin_name: String,
    admin_id: String,
    consent_marketing: Boolean,
});

const Est = mongoose.model("estimation", estSchema);

app.post("/estimation", (req, res) => {
    console.log(req.body);
    const est = new Est(req.body);
    est.save().then(() => console.log("save success"));
    res.status(201).send("estimation registered");
});

app.listen(port, () => {
    console.log(`server start on port: ${port}`);
});
