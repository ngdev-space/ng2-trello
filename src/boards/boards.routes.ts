import { RouterModule } from "@angular/router";
import { BoardsComponent } from "./boards.component";

const routes = [
    { path: '', component: BoardsComponent }
];

export default RouterModule.forChild(routes);