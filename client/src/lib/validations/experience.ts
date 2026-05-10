import { z } from 'zod';

export const experienceValidationSchema = z.object({
  id: z
    .string()
    .min(1, 'ID is required'),

  title: z
    .string()
    .min(1, 'Title is required')
    .min(3, 'Title must be at least 3 characters')
    .max(200, 'Title must not exceed 200 characters'),

  company: z
    .string()
    .min(1, 'Company is required')
    .min(2, 'Company name must be at least 2 characters')
    .max(150, 'Company name must not exceed 150 characters'),

  startDate: z
    .string()
    .min(1, 'Start date is required'),

  endDate: z
    .string()
    .min(1, 'End date is required'),

  description: z
    .string()
    .min(1, 'Description is required')
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must not exceed 2000 characters'),

  skills: z
    .array(z.string().trim().min(2, 'Each skill must be at least 2 characters'))
    .min(1, 'At least one skill is required'),
}).refine(
  (data) => {
    // Validate that endDate is after startDate
    const start = new Date(data.startDate);
    const end = new Date(data.endDate);
    return end > start;
  },
  {
    message: 'End date must be after start date',
    path: ['endDate'],
  }
);

export type ExperienceValidation = z.infer<typeof experienceValidationSchema>;
