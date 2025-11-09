"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("../config/db"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const auth_routes_2 = __importDefault(require("./auth.routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conectar ao mongo
(0, db_1.default)();
// APIs
app.use('/api/auth', auth_routes_1.default);
app.use('/api/contacts', auth_routes_2.default);
// servir frontend estático (pasta public)
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// fallback (opcional)
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
