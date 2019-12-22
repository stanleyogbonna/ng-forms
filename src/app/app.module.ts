import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedDirective } from './shared/identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
