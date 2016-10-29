import { RouterModule } from "@angular/router";
import { LoginComponent } from './login.component';

const routes = [
    { path: '', component: LoginComponent }
];

export default RouterModule.forChild(routes);
