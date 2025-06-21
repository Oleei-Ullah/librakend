import { model, Schema } from 'mongoose';
import { Book } from '../book/book.model';
import {
  IBorrow,
  IBorrowDocument,
  ICheckBookAvailability,
} from './borrow.interface';

export const BorrowSchema = new Schema<IBorrowDocument, ICheckBookAvailability>(
  {
    book: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
      required: [true, 'Book reference is must.'],
    },
    quantity: {
      type: Number,
      required: [true, 'Must add the quantity.'],
      min: [1, 'Quantity must be at least 1.'],
    },
    dueDate: {
      type: Date,
      required: [true, 'Due date is required.'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

BorrowSchema.static(
  'cheakAvailabilityAndCreate',
  async function cheakAvailabilityAndCreate({
    book,
    quantity,
    dueDate,
  }: IBorrow) {
    const availableBook = await Book.findById(book);
    if (!availableBook) throw new Error('Your desired book not found!');

    if (availableBook.copies < quantity) {
      throw new Error('Not enough book copies.');
    }

    availableBook.copies -= quantity;

    if (availableBook.copies === 0) {
      availableBook.available = false;
    }

    await availableBook.save({ validateBeforeSave: true });

    const borrow = await Borrow.create({
      book: availableBook._id,
      quantity,
      dueDate,
    });

    return borrow;
  }
);

export const Borrow = model<IBorrowDocument, ICheckBookAvailability>(
  'Borrow',
  BorrowSchema
);
