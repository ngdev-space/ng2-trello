import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ng2-bootstrap/components/modal';

import { ModalComponent } from './modal/modal.component';
import { TrelloService } from './service/trello.service';
import { LoginService } from './service/login.service';
import { AuthGuard } from './service/auth-guard.service';
import { AutoFocus } from './directives/auto-focus'; 
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
    imports: [CommonModule, RouterModule, ModalModule],
    declarations: [ModalComponent, AutoFocus],
    exports: [ModalComponent, AutoFocus]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [TrelloService, LoginService, AuthGuard]
        };
    }
}
