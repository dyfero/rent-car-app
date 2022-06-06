import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { InitialsPipe } from './pipes/initials.pipe';

@NgModule({
  exports: [
    TranslocoModule,
    InitialsPipe,
  ],
  declarations: [
    InitialsPipe
  ],
  imports: [
    CommonModule,
    TranslocoModule
  ]
})
export class SharedModule { }
