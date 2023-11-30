import { Request, Response } from 'express';
import veiculoRepository from '../repositories/veiculo.repositories';

const cadastrarVeiculo = async (req: Request, res: Response) => {
  const dadosVeiculo = req.body;

  try {
    const resultado = await veiculoRepository.cadastrarVeiculo(dadosVeiculo);
    return res.status(resultado.success ? 201 : 400).json(resultado);
  } catch (error) {
    console.error('Erro no cadastro do veículo:', error);
    return res.status(500).json({ success: false, message: 'Erro interno ao cadastrar o veículo.' });
  }
};

const consultarVeiculos = async (req: Request, res: Response) => {
  try {
    const veiculos = await veiculoRepository.consultarVeiculos();
    return res.json(veiculos);
  } catch (error) {
    console.error('Erro ao consultar veículos:', error);
    return res.status(500).json({ success: false, message: 'Erro interno ao consultar os veículos.' });
  }
};

export default { cadastrarVeiculo, consultarVeiculos };
