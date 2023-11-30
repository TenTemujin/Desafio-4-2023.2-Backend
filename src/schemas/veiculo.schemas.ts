import z from 'zod';

const veiculoSchema = z.object({
  Placa: z.string().length(7),
  Marca: z.string(),
  Cor: z.string(),
  Modelo: z.string(),
  Categoria: z.number(),
  AnoFab: z.number(),
  FK_Proprietario_CPF: z.string().length(11),
});

export default veiculoSchema;
