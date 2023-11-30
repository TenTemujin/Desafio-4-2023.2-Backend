import db from '../sql/DB';
import multa.schemas from '../schemas/multa.schemas';

const cadastrarMulta = async (dadosMulta: any) => {
  try {
    const multaValida = multaSchema.parse(dadosMulta);

    const query = `
      INSERT INTO Multa (CC, Data_Multa, FK_Veiculo_Placa, Valor, Pontos, Tipo)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(query, Object.values(multaValida));

    if (result && result[0] && result[0].affectedRows === 1) {
      return { success: true, message: 'Multa cadastrada com sucesso!' };
    } else {
      return { success: false, message: 'Falha ao cadastrar a multa.' };
    }
  } catch (error) {
    console.error('Erro ao cadastrar multa:', error);
    return { success: false, message: 'Erro ao cadastrar a multa. Verifique os dados.' };
  }
};

const consultarMultas = async () => {
  try {
    const query = 'SELECT * FROM Multa';
    const result = await db.query(query);

    return result[0];
  } catch (error) {
    console.error('Erro ao consultar multas:', error);
    return [];
  }
};

export default { cadastrarMulta, consultarMultas };
