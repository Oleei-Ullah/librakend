import { z } from 'zod';

export const BookValidationSchema =
  z.object({
    title: z
      .string()
      .min(1, 'Title is required')
      .trim(),
    author: z
      .string()
      .min(1, 'Author is required')
      .trim(),
    genre: z.enum(
      [
        'FICTION',
        'NON-FICTION',
        'SCIENCE',
        'HISTORY',
        'BIOGRAPHY',
        'FANTASY',
      ],
      {
        errorMap: () => ({
          message: 'Invalid genre',
        }),
      }
    ),
    isbn: z
      .string()
      .min(1, 'ISBN is required')
      .trim(),
    description: z
      .string()
      .optional()
      .transform(
        (val) => val?.trim() ?? ''
      ),
      copies: z.number().min(1, 'Must add the number of copies.'),
    available: z
      .boolean()
      .default(true),
  });
