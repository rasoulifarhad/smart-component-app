import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CustomLessonsListComponent } from './custom-lessons-list/custom-lessons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonsListComponent,
    CustomLessonsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
