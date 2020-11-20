import { INote } from '../interfaces/inote';

export interface ISection {
  sectionId: number;
  sectionTitle: string;
  notes: INote[];
}
