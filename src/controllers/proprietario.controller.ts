import { Request, Response } from 'express';
import proprietarioRepository from '../repositories/proprietario.repositories';

const cadastrarProprietario = async (req: Request, res: Response) => {
  const dadosProprietario = req.body;

  try {
    const resultado = await proprietarioRepository.cadastrarProprietario(dadosProprietario);
    return res.status(resultado.success ? 201 : 400).json(resultado);
  } catch (error) {
    console.error('Erro no cadastro do proprietário:', error);
    return res.status(500).json({ success: false, message: 'Erro interno ao cadastrar o proprietário.' });
  }
};

const consultarProprietarios = async (req: Request, res: Response) => {
  try {
    const proprietarios = await proprietarioRepository.consultarProprietarios();
    return res.json(proprietarios);
  } catch (error) {
    console.error('Erro ao consultar proprietários:', error);
    return res.status(500).json({ success: false, message: 'Erro interno ao consultar os proprietários.' });
  }
};

export default { cadastrarProprietario, consultarProprietarios };
