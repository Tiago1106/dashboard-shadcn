import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("E-mail inválido"),
  password: z
    .string({ required_error: "A senha é obrigatória" })
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
});