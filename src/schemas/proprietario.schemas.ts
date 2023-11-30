import z from 'zod';

const proprietarioSchema = z.object({
  CPF: z.string().length(11),
  CNH_Venc: z.string(), 
  CNH_Cat: z.string().length(3),
  Endereco: z.string(),
  Estado: z.string().length(2),
  Cidade: z.string(),
  Bairro: z.string(),
  Telefone: z.string(),
  Sexo: z.string(),
  DataNasc: z.string(), 
  ID: z.number(),
});

export default proprietarioSchema;
