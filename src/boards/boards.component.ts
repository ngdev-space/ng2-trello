import { Component } from "@angular/core";
import { TrelloService } from '../shared/service/trello.service';
import { LoginService } from '../shared/service/login.service';
import { Board } from '../shared/models/base';

@Component({
    selector: 'boards',
    templateUrl: 'boards.component.html',
    styleUrls: ['boards.component.css']
})
export class BoardsComponent{
    boards: Array<Board> = this._trelloService.getBoards();
    boardName: string;
    addingBoard: boolean = false;

    constructor(
        private _trelloService: TrelloService,
        private _loginService: LoginService
    ){}

    newBoard() {
        this.addingBoard = !this.addingBoard;
    }

    addBoard() {
        if (this.boardName) {
	        this._trelloService.createBoard(this.boardName);
	        this.boardName = '';
        }
        this.newBoard();
    }

    addBoardOnEnter(event: any) {
	    if (event.keyCode === 13) {
	      event.target.blur();
	    }
    }

    logout() {
		this._loginService.logout();
    }
}
