import { Injectable } from '@angular/core';
import { Column, Board, TextCard, TextElement, Tag, CardI } from '../models/base';

const tag = new Tag('tag1');
const el = new TextElement('Element1');
const card = new TextCard(1, 'Title', 'Description', [tag], [el]);
const card2 = new TextCard(2, 'Title2', 'Description', [tag], [el]);
const card3 = new TextCard(3, 'Title3', 'Description', [tag], [el]);
const list = new Column(1, 'ToDo', [card, card3]);
const list2 = new Column(2, 'In Progress', [card2]);
const board = new Board(1, 'New board', [list, list2]);


const boards: Array<Board> = [
    board
];

@Injectable()
export class TrelloService {

    constructor() { }

    getBoards(): Array<Board> {
        return boards;
    }

    getBoard(boardId: number): Board | boolean {
		for (let i = 0; i < boards.length; i++) {
			if (boards[i].id === boardId) {
                return boards[i];
            }
        }
        return false;
    }

    createColumn(boardId: number, columnName: string): boolean {
        for (let i = 0; i < boards.length; i++) {
			if (boards[i].id === boardId) {
                boards[i].items.push(new Column(new Date().getMilliseconds(), columnName, []));
                return true;
            }
        }
    }

    createBoard(boardName: string): boolean {
        boards.push(new Board(new Date().getMilliseconds(), boardName, []));
        return true;
    }

    createCard(boardId: number, columnId: number, cardText: string): boolean {
        for (let i = 0; i < boards.length; i++) {
			if (boards[i].id === boardId) {
                const board = boards[i];
                for (let j = 0; j < board.items.length; j++) {
					if (board.items[j].id === columnId) {
		                let column = board.items[j];
                        let card = new TextCard(new Date().getMilliseconds(), cardText, '', [], []);
                        column.items.push(card);
                        return true;
		            }
		        }
            }
        }
		return false;
    }
}

