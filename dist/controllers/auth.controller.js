"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
// Simulação de banco de dados (substitua pelo seu DB real)
const users = [
    { email: 'teste@teste.com', password: '123456' }
];
// Função de login
const login = async (req, res) => {
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
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
exports.login = login;
// Função de registro (opcional)
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email e senha são obrigatórios' });
        }
        // Aqui você adicionaria ao banco real
        users.push({ email, password });
        return res.status(201).json({ message: 'Usuário registrado com sucesso' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erro interno do servidor' });
    }
};
exports.register = register;
