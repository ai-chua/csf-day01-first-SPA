import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { TextcontainerComponent } from './textcontainer/textcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainheaderComponent,
    TextcontainerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
