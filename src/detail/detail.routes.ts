import { RouterModule } from "@angular/router";
import { DetailComponent } from "./detail.component";

const routes = [
    { path: ':id', component: DetailComponent }
];

export default RouterModule.forChild(routes);