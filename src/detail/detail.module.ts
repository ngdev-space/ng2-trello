import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule }from "@angular/forms"; 
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from "./detail.component";
import { CardComponent } from "./card/card.component";
import { CardListComponent } from "./card-list/card-list.component";
import { DndModule } from 'ng2-dnd';
import routes from "./detail.routes";

@NgModule({
    imports:[CommonModule, FormsModule, DndModule, SharedModule , routes],
    declarations: [DetailComponent, CardComponent, CardListComponent]
})
export default class BoardsModule{}