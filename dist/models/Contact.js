"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ContactSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: String,
    phone: String,
    owner: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Contact', ContactSchema);
