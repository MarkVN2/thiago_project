import User from '../../src/models/User'; // ajuste o caminho conforme necessário

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email,password } = req.body;

    try {
      const found = await User.findOne({
        where:{
          email:email
        }
      })
      if (!found){
        res.status(500).json({ message: 'Erro ao encontrar usuario: ' + found });
      }
      else{
        res.status(200).json({ message: found })
      }
      return found;
    } catch (error) {
      console.error('Erro ao encontrar usuario:', error);
      res.status(500).json({ message: 'Erro ao encontrar usuario' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}