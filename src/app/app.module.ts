import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StuMtComponent } from './shared/components/stu-mt/stu-mt.component';

@NgModule({
  declarations: [
    AppComponent,
    StuMtComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
