import { model, Schema } from 'mongoose';
import { IBookDocument } from './book.interfaces';

const BookSchema = new Schema<IBookDocument>(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      trim: true,
    },
    author: {
      type: String,
      required: [true, 'Author is required.'],
      trim: true,
    },
    genre: {
      type: String,
      enum: {
        values: [
          'FICTION',
          'NON-FICTION',
          'SCIENCE',
          'HISTORY',
          'BIOGRAPHY',
          'FANTASY',
        ],
        message:
          'Genre must be one of: FICTION, NON-FICTION, SCIENCE, HISTORY, BIOGRAPHY, FANTASY.',
      },
      required: [true, 'Genre is required.'],
    },
    isbn: {
      type: String,
      required: [true, 'ISBN is required.'],
      trim: true,
      unique: true
    },
    description: {
      type: String,
      trim: true,
    },
    copies: {
      type: Number,
      min: [0, 'Copies must be a positive number.'],
      required: [true, 'Number of copies is required.'],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const Book = model<IBookDocument>('Book', BookSchema);
