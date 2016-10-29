import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from 'ng2-bootstrap/components/buttons';
import { DndModule } from 'ng2-dnd';
import 'ng2-dnd-css';

import appRoutes from "./app.routes";

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule, ButtonsModule, SharedModule.forRoot(), DndModule.forRoot(), appRoutes],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}