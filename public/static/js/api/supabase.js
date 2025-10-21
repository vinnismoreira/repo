import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

const itemSchema = z.object({
  pn: z.string().trim().min(1),
  ecode: z.string().trim().min(1),
  descricao: z.string().trim().optional(),
  quantidade: z.number().int().nonnegative(),
  status: z.enum(['OK', 'EM FALTA', 'VENCIDO', 'EM DESCARTE']),
  localizacao_no_estoque: z.string().trim().min(1),
  motivo_de_descarte: z.string().trim().optional(),
  data_de_verificacao: z.string().trim().min(1),
  data_de_validade: z.string().trim().optional(),
  responsavel_pelo_registro: z.string().trim().min(1),
});

export default async function handler(req, res) {
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { action, payload } = body;

    if (!action) return res.status(400).json({ error: 'Ação não informada' });

    if (action === 'insert' || action === 'update') {
      try {
        const validatedPayload = itemSchema.parse(payload);

        if (action === 'insert') {
          const { data, error } = await supabase
            .from('GESTAO_DE_ESTOQUE')
            .insert([validatedPayload]);
          if (error) throw error;
          return res.status(200).json({ data });
        }

        if (action === 'update') {
          if (!payload.id) return res.status(400).json({ error: 'ID obrigatório para update' });
          const { data, error } = await supabase
            .from('GESTAO_DE_ESTOQUE')
            .update(validatedPayload)
            .eq('id', payload.id);
          if (error) throw error;
          return res.status(200).json({ data });
        }

      } catch (error) {
        if (error instanceof z.ZodError) {
          return res.status(400).json({ error: 'Dados inválidos', details: error.errors });
        }
        throw error;
      }
    }

    if (action === 'select') {
      const { data, error } = await supabase
        .from('GESTAO_DE_ESTOQUE')
        .select('*')
        .order('id', { ascending: false });
      if (error) throw error;
      return res.status(200).json({ data });
    }

    if (action === 'delete') {
      if (!payload.id) return res.status(400).json({ error: 'ID obrigatório para delete' });
      const { data, error } = await supabase
        .from('GESTAO_DE_ESTOQUE')
        .delete()
        .eq('id', payload.id);
      if (error) throw error;
      return res.status(200).json({ data });
    }

    return res.status(405).json({ error: 'Ação não permitida' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' });
  }
}