import { z } from "zod";

export const Insight = z.object({
  id: z.string().uuid(),
  brand: z.string().uuid(),
  createdAt: z.date(),
  text: z.string(),
});

export type Insight = z.infer<typeof Insight>;
