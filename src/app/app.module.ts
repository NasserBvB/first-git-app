import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ResumePipe } from './resume.pipe';
import { MaDirectiveComponent } from './ma-directive/ma-directive.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ResumePipe,
    MaDirectiveComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
