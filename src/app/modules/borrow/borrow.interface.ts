import { Document, Model, Types } from 'mongoose';

export interface IBorrow {
  book: Types.ObjectId;
  quantity: number;
  dueDate: Date;
}

export type IBorrowDocument = IBorrow & Document;

export interface ICheckBookAvailability extends Model<IBorrowDocument> {
  cheakAvailabilityAndCreate({
    book,
    quantity,
    dueDate,
  }: IBorrow): Promise<IBorrowDocument>;
}
