import { INote } from './note.interface';

export interface ISection{
    id: number;
    name: string;
    arrayOfNotes: INote[];
}
