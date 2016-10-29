import { RouterModule } from "@angular/router";
import { AuthGuard } from './shared/service/auth-guard.service';

console.log(AuthGuard);

const routes = [
    { path: '', loadChildren: 'boards/boards.module#', canActivate: [AuthGuard]  },
    { path: 'detail', loadChildren: 'detail/detail.module', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: 'login/login.module' }
];


export default RouterModule.forRoot(routes);
