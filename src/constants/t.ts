import {z} from 'zod';

export const TProjectSchema = z.object({
  name: z.string().default(''),
});

export const TAppPublisedSchema = z.object({
  label: z.string().default(''),
  link: z.string().default(''),
  markets: z.array(z.string()).default([]),
  alive: z.boolean().optional().default(false),
});

export const TCompanySchema = z.object({
  parent: z.string().default(''),
  children: z.array(z.string()).default([]),
  date: z.string().default(''),
  published: z.array(TAppPublisedSchema).default([]),
  projects: z.array(z.string()).default([]),
});

export type TAppPublised = z.infer<typeof TAppPublisedSchema>;
export type TCompany = z.infer<typeof TCompanySchema>;
export type TProject = z.infer<typeof TProjectSchema>;
