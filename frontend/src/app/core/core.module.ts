import { LOCALE_ID, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { TranslocoCoreModule } from "./transloco/transloco.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MessageService } from "primeng/api";
import locale from '@angular/common/locales/pl';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor';


@NgModule({
  declarations: [],
  imports: [
    TranslocoCoreModule,
    CommonModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pl-PL'
    },
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
    registerLocaleData(locale);
  }
}
