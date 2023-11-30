import z from 'zod';

const multaSchema = z.object({
  CC: z.number(),
  Data_Multa: z.string(), 
  FK_Veiculo_Placa: z.string().length(7),
  Valor: z.number(),
  Pontos: z.number(),
  Tipo: z.string(),
});

export default multaSchema;
