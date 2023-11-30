import { Request, Response } from 'express';
import multaRepository from '../repositories/multa.repositories';

const cadastrarMulta = async (req: Request, res: Response) => {
  const dadosMulta = req.body;

  try {
    const resultado = await multaRepository.cadastrarMulta(dadosMulta);
    return res.status(resultado.success ? 201 : 400).json(resultado);
  } catch (error) {
    console.error('Erro no cadastro da multa:', error);
    return res.status(500).json({ success: false, message: 'Erro interno ao cadastrar a multa.' });
  }
};

const consultarMultas = async (req: Request, res: Response) => {
  try {
    const multas = await multaRepository.consultarMultas();
    return res.json(multas);
  } catch (error) {
    console.error('Erro ao consultar multas:', error);
    return res.status(500).json({ success: false, message: 'Erro interno ao consultar as multas.' });
  }
};

export default { cadastrarMulta, consultarMultas };
