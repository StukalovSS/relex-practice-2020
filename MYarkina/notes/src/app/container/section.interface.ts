import { INote } from './note.interface';

/**
 * Интерфейс секции.
 */
export interface ISection{
  id: number;
  name: string;
  arrayOfNotes: INote[];
}
