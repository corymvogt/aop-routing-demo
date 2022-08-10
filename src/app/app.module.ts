import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AopRoutingModule, AopNavigationService } from 'aop-routing';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AopRoutingModule
  ],
  imports: [
    BrowserModule,
    AopRoutingModule.forRoot({expirementNav: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(private aopNavigationService: AopNavigationService) {}
}
