import { Component, Input } from '@angular/core';
import { CardI } from '../../shared/models/base';

@Component({
    selector: 'card',
    styleUrls: ['card.component.css'],
    templateUrl: 'card.component.html'
})
export class CardComponent {
    editingCard: boolean = false;
	@Input() card: CardI;

    constructor() { }

    editCard() {
		this.editingCard = !this.editingCard;
    }

    updateCard() {
		this.editingCard = !this.editingCard;
    }

    blurOnEnter(event: any) {
	    if (event.keyCode === 13) {
	      event.target.blur();
	    }
	}
}