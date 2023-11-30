import db from '../sql/DB';
import veiculo.schemas from '../schemas/veiculo.schemas';

const cadastrarVeiculo = async (dadosVeiculo: any) => {
  try {
    const veiculoValido = veiculoSchema.parse(dadosVeiculo);

    const query = `
      INSERT INTO Veiculo (Placa, Marca, Cor, Modelo, Categoria, AnoFab, FK_Proprietario_CPF)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(query, Object.values(veiculoValido));

    if (result && result[0] && result[0].affectedRows === 1) {
      return { success: true, message: 'Veículo cadastrado com sucesso!' };
    } else {
      return { success: false, message: 'Falha ao cadastrar o veículo.' };
    }
  } catch (error) {
    console.error('Erro ao cadastrar veículo:', error);
    return { success: false, message: 'Erro ao cadastrar o veículo. Verifique os dados.' };
  }
};

const consultarVeiculos = async () => {
  try {
    const query = 'SELECT * FROM Veiculo';
    const result = await db.query(query);

    return result[0];
  } catch (error) {
    console.error('Erro ao consultar veículos:', error);
    return [];
  }
};

export default { cadastrarVeiculo, consultarVeiculos };
