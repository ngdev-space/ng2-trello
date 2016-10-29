import { Component} from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';
import { TrelloService } from '../shared/service/trello.service';
import { Board } from '../shared/models/base';

@Component({
    selector: 'detail',
    styleUrls: ['detail.component.css'],
    templateUrl: 'detail.component.html'
})
export class DetailComponent {
    editingTitle: boolean = false;
    addingColumn: boolean = false;
    board: Board | boolean;
    columnName: string;
    boardId: number;

    constructor(
        private _trelloService: TrelloService,
        private _route: ActivatedRoute
    ){}

    editTitle() {
        this.editingTitle = !this.editingTitle;
    }

    updateBoard() {
		this.editingTitle = !this.editingTitle;
    }

    blurOnEnter(event: any) {
	    if (event.keyCode === 13) {
	      event.target.blur();
	    }
	}

    newColumn() {
        this.addingColumn = !this.addingColumn;
    }

    addColumn() {
        if (this.columnName) {
	        this._trelloService.createColumn(this.boardId, this.columnName);
	        this.columnName = '';
        }
        this.newColumn();
    }

    addColumnOnEnter(event: any) {
	    if (event.keyCode === 13) {
	      event.target.blur();
	    }
    }

    addCard() {
        console.log('added card');
    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            const id = parseInt(params['id']);
            this.boardId = id;
            this.board  = this._trelloService.getBoard(id);
        });
    }
}
