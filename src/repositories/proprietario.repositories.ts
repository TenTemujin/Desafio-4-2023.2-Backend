import db from '../sql/DB';
import proprietario.schemas from '../schemas/proprietario.schemas';

const cadastrarProprietario = async (dadosProprietario: any) => {
  try {
    const proprietarioValido = proprietarioSchema.parse(dadosProprietario);

    const query = `
      INSERT INTO Proprietario (CPF, CNH_Venc, CNH_Cat, Endereco, Estado, Cidade, Bairro, Telefone, Sexo, DataNasc, ID)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const result = await db.query(query, Object.values(proprietarioValido));

    if (result && result[0] && result[0].affectedRows === 1) {
      return { success: true, message: 'Proprietário cadastrado com sucesso!' };
    } else {
      return { success: false, message: 'Falha ao cadastrar o proprietário.' };
    }
  } catch (error) {
    console.error('Erro ao cadastrar proprietário:', error);
    return { success: false, message: 'Erro ao cadastrar o proprietário. Verifique os dados.' };
  }
};

const consultarProprietarios = async () => {
  try {
    const query = 'SELECT * FROM Proprietario';
    const result = await db.query(query);

    return result[0];
  } catch (error) {
    console.error('Erro ao consultar proprietários:', error);
    return [];
  }
};

export default { cadastrarProprietario, consultarProprietarios };
