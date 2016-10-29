import { Component, Input } from '@angular/core';
import { TrelloService } from '../../shared/service/trello.service';
import { Column, CardI } from '../../shared/models/base';

@Component({
    selector: 'card-list',
    styleUrls: ['card-list.component.css'],
    templateUrl: 'card-list.component.html'
})
export class CardListComponent {
    editingColumn: boolean = false;
    addingCard: boolean = false;
    cardText: string;
    @Input() list: Column;
    @Input() boardId: number;

    constructor(
      private _trelloService: TrelloService,
    ) {}

    editColumn() {
			this.editingColumn = !this.editingColumn;
    }

    updateColumn() {
			this.editingColumn = !this.editingColumn;
    }

    newCard() {
        this.addingCard = !this.addingCard;
    }

    addCard() {
        if (this.cardText) {
	        this._trelloService.createCard(this.boardId, this.list.id, this.cardText);
	        this.cardText = '';
        }
        this.newCard();
    }

    addCardOnEnter(event: any) {
	    if (event.keyCode === 13) {
	      event.target.blur();
	    }
    }

}