import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommandComponent } from './command/command.component';
import { CommandListComponent } from './command-list/command-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandComponent,
    CommandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
