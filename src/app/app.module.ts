import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyParentComponent } from './my-parent/my-parent.component';
import { MyChildComponent } from './my-child/my-child.component';
import { FormsModule } from '@angular/forms';
import { MySeblingComponent } from './my-sebling/my-sebling.component';
import { MySebling2Component } from './my-sebling2/my-sebling2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyParentComponent,
    MyChildComponent,
    MySeblingComponent,
    MySebling2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
