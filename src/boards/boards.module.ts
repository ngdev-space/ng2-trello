import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule }from "@angular/forms"; 
import { SharedModule } from '../shared/shared.module';
import { BoardsComponent } from "./boards.component";
import routes from "./boards.routes";

@NgModule({
    imports:[CommonModule, FormsModule, SharedModule, routes],
    declarations: [BoardsComponent]
})
export default class BoardsModule{}