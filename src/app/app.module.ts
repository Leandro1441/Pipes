import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemploPipesComponent } from './exemplo-pipes/exemplo-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    /*{
      provide:LOCALE_ID,
      useValue:'pt'
    }*/
    SettingsService,
    {
      provide:LOCALE_ID,
      deps:[SettingsService],
      useFactory:(SettingsService) => SettingsService.getLocale()
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
