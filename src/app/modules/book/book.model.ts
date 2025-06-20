import { model, Schema } from 'mongoose';
import { IBook } from './book.interface';

const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  genre: {
    type: String,
    enum: [
      'FICTION',
      'NON-FICTION',
      'SCIENCE',
      'HISTORY',
      'BIOGRAPHY',
      'FANTASY',
    ],
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

export const Book = model<IBook>('Book', BookSchema);
