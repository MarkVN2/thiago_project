import User from '../../src/models/User'; // ajuste o caminho conforme necessário
import sequelize from '../../src/sequelize';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, password, email } = req.body;

    try {
      const newUser = await User.create({ name:name,password:password, email:email });
      console.log('Novo usuário criado:', newUser);

      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ message: 'Erro ao criar usuário' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}