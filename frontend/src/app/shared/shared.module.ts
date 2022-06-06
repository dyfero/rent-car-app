import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { InitialsPipe } from './pipes/initials.pipe';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  exports: [
    TranslocoModule,
    InitialsPipe,
    ErrorComponent,
  ],
  declarations: [
    InitialsPipe,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ]
})
export class SharedModule { }
