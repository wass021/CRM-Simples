"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = exports.listContacts = void 0;
const Contact_1 = __importDefault(require("../models/Contact"));
const listContacts = async (req, res) => {
    const owner = req.user?.id;
    const contacts = await Contact_1.default.find({ owner }).sort({ createdAt: -1 });
    res.json(contacts);
};
exports.listContacts = listContacts;
const createContact = async (req, res) => {
    const owner = req.user?.id;
    const { name, email, phone } = req.body;
    const contact = new Contact_1.default({ name, email, phone, owner });
    await contact.save();
    res.status(201).json(contact);
};
exports.createContact = createContact;
