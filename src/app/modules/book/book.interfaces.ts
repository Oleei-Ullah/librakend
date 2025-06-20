import { Document } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  genre:
    | 'FICTION'
    | 'NON-FICTION'
    | 'SCIENCE'
    | 'HISTORY'
    | 'BIOGRAPHY'
    | 'FANTASY';
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export type IBookDocument = IBook & Document;
