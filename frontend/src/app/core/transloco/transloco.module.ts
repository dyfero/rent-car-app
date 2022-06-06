import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Translation,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  translocoConfig,
  TranslocoModule,
  TranslocoService
} from "@ngneat/transloco";
import { TranslocoHttpLoader } from "./transloco.http-loader";
import { environment } from "../../../environments/environment";


@NgModule({
  exports: [
    TranslocoModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['pl', 'en'],
        defaultLang: 'pl',
        fallbackLang: ['pl', 'en'],
        reRenderOnLangChange: true,
        prodMode: environment.production,
      })
    },
    {
      provide: TRANSLOCO_LOADER,
      useClass: TranslocoHttpLoader
    },
    {
      provide: APP_INITIALIZER,
      deps: [TranslocoService],
      useFactory: (translocoService: TranslocoService): any => (): Promise<Translation> => {
        const defaultLang = translocoService.getDefaultLang();
        translocoService.setActiveLang(defaultLang);
        return translocoService.load(defaultLang).toPromise();
      },
      multi: true
    }
  ]
})
export class TranslocoCoreModule {
}
