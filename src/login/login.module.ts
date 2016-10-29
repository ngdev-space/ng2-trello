import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import routes from "./login.routes";

@NgModule({
    imports: [CommonModule, FormsModule, SharedModule, routes],
    declarations: [LoginComponent],
    providers: []
})
export default class LoginModule {}