import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ResumePipe } from './resume.pipe';
import { MaDirectiveComponent } from './ma-directive/ma-directive.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ResumePipe,
    MaDirectiveComponent,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
