import { Router, Request, Response } from 'express';

const router = Router();

// --- Mock temporário de "banco de dados" ---
let contacts = [
  { id: 1, name: 'João Silva', email: 'joao@teste.com', phone: '1111-1111' },
  { id: 2, name: 'Maria Souza', email: 'maria@teste.com', phone: '2222-2222' },
];

// -----------------------------------------------------------------------------
// 🚧 [FUTURA IMPLEMENTAÇÃO]
// Aqui será adicionada a conexão real com o banco de dados (ex: MongoDB ou SQL)
// Exemplo:
// import Contact from '../models/Contact';
// await Contact.create(req.body);
// -----------------------------------------------------------------------------

// GET /api/contacts -> lista todos os contatos
router.get('/', (req: Request, res: Response) => {
  res.json(contacts);
});

// POST /api/contacts -> cria um novo contato
router.post('/', (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Nome e e-mail são obrigatórios' });
  }

  // Cria um novo contato (mock)
  const newContact = {
    id: contacts.length + 1,
    name,
    email,
    phone: phone || ''
  };

  contacts.push(newContact);

  // Simula resposta de sucesso
  res.status(201).json({
    message: 'Contato criado com sucesso (mock)',
    contact: newContact
  });
});

// DELETE /api/contacts/:id -> remove contato
router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  contacts = contacts.filter(c => c.id !== id);
  res.json({ message: `Contato ${id} removido (mock)` });
});

export default router;