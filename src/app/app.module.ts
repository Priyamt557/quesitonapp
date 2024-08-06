import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AddQuestionDialog, MainComponent } from './main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswersComponent } from './answers/answers.component';
import { AttemptComponent, AttemptQuestion } from './attempt/attempt.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddQuestionDialog,
    AnswersComponent,
    AttemptComponent,
    AttemptQuestion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
