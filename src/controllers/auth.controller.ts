import { Request, Response } from 'express';

// Simulação de banco de dados (substitua pelo seu DB real)
const users = [
  { email: 'teste@teste.com', password: '123456' }
];

// Função de login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Validação do usuário
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    // Gera token fictício (substitua pelo JWT real)
    const token = 'FAKE_JWT_TOKEN';

    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

// Função de registro (opcional)
export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email e senha são obrigatórios' });
    }

    // Aqui você adicionaria ao banco real
    users.push({ email, password });

    return res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};