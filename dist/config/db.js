"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/crm';
async function connectDB() {
    try {
        await mongoose_1.default.connect(MONGO_URI);
        console.log('MongoDB conectado');
    }
    catch (err) {
        console.error('Erro ao conectar MongoDB:', err);
        process.exit(1);
    }
}
