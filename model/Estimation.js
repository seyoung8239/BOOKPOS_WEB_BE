import mongoose from "mongoose";

const estSchema = new mongoose.Schema({
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

export const Estimation = mongoose.model("estimation", estSchema);
