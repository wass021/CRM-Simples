import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import contactsRoutes from './routes/contacts.routes';

const app = express();
const PORT = 4000;

// Conecta ao banco de dados
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactsRoutes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});

