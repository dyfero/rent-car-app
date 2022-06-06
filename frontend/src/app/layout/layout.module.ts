import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import { TRANSLOCO_SCOPE } from "@ngneat/transloco";
import { AvatarModule } from 'primeng/avatar';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    EmptyComponent,
    HeaderComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    SharedModule,
    AvatarModule
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE, useValue: 'layout', multi: true
    },
    {
      provide: TRANSLOCO_SCOPE, useValue: 'menu', multi: true
    }
  ]
})
export class LayoutModule { }
