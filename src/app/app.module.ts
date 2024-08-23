import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryOverviewComponent } from './diary/diary-overview/diary-overview.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { DiaryEntryComponent } from './diary/diary-entry/diary-entry/diary-entry.component';
import { DiaryEntryManagerComponent } from './diary/diary-entry-manager/diary-entry-manager/diary-entry-manager.component';
import { DiaryNoteComponent } from './diary/diary-note/diary-note/diary-note.component';
import { DiaryNoteManagerComponent } from './diary/diary-note-manager/diary-note-manager.component';
import { DiaryNoteFormComponent } from './diary/diary-note-form/diary-note-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DiaryOverviewComponent,
    LoginFormComponent,
    DiaryEntryComponent,
    DiaryEntryManagerComponent,
    DiaryNoteComponent,
    DiaryNoteManagerComponent,
    DiaryNoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
