import { Injectable } from '@angular/core';
import { INote } from './note/inote';
import { ISection } from './section/isection';

@Injectable({ providedIn: 'root' })
export class DataService {
    sections: ISection[] = [];
    getSection(id: number) {
        return this.sections.find(s => s.sectionId === id);
    }
    addSection(newSection: ISection) {
        this.sections.push(newSection);
    }
    removeSection(id: number) {
        this.sections.splice(this.sections.findIndex(s => s.sectionId === id), 1);
    }

    getNote(idSection: number, idNote: number) {
        return this.sections.find(s => s.sectionId === idSection).notes.find(n => n.noteId === idNote);
    }
    addNote(idSection: number, newNote: INote) {
        this.sections.find(s => s.sectionId === idSection).notes.push(newNote);
    }
    removeNote(idSection: number, idNote: number) {
        const s = this.sections.find(s => s.sectionId === idSection);
        const i = s.notes.findIndex(n => n.noteId === idNote);
        s.notes.splice(i, 1);
    }

    getEvenNotes(s: ISection, even: boolean) {
        let n = [];
        for (let i = 0; i < s.notes.length; i++) {
            if (even) {
                if (s.notes[i].noteDate.getDate() % 2 == 0) {
                    n.push(s.notes[i]);
                }
            }
            else {
                if (s.notes[i].noteDate.getDate() % 2 != 0) {
                    n.push(s.notes[i]);
                }
            }
        }
        return n;
    }

    sortNotes(notes: INote[]) {
        return this.quickSort(notes, 0, notes.length - 1);
        //return notes.sort(function(a,b){return a.noteDate.getTime() - b.noteDate.getTime()});
    }

    private partition(arr: INote[], left: number, right: number) {
        let p: number = arr[left].noteDate.getTime();
        let i: number = left;
        let j: number = right;
        while (i <= j) {
            while (arr[i].noteDate.getTime() < p) {
                i++;
            }
            while (arr[j].noteDate.getTime() > p) {
                j--;
            }
            if (i <= j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        return i;
    }

    private quickSort(arr: INote[], left: number, right: number) {
        let p: number;
        if (left < right) {
            p = this.partition(arr, left, right);
            this.quickSort(arr, left, p - 1);
            this.quickSort(arr, p, right);
        }
        return arr;
    }
}