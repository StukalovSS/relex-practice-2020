import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SectionsDataService } from '../sections-data.service';
import { INote } from './../section/note.interface';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})

/**
 * Класс отвечает за хранение данных в заметке.
 */
export class NoteComponent implements INote {
    public readonly icons = {
        faEdit,
        faTrashAlt
    };

    constructor(public sectServ: SectionsDataService) {
    }

    @Input() header: string;
    @Input() content: string;
    @Input() date: Date;
    @Input() id: number;
    @Input() sectionId: number;

    @Output() clickOnTrash = new EventEmitter<number>();

    public invisibleForm = true;

    /**
     * В процессе удаления происходит отправка информации о своем удалении родительскому компоненту.
     */
    public delete(): void {
        this.sectServ.deleteNote(this.sectionId, this.id);
        this.clickOnTrash.emit(this.id);
    }

    public changeFormVisibillity(): void {
        this.invisibleForm = !this.invisibleForm;
    }

    public changeNote(e: INote): void {
        this.changeFormVisibillity();
        this.sectServ.changeNoteContent(this.sectionId, this.id, e);
        this.header = e.header;
        this.content = e.content;
        this.date = e.date;
    }
}
