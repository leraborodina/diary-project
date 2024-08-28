import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiaryOverviewComponent } from './diary/diary-overview.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { DiaryNoteComponent } from './diary/diary-note/diary-note.component';
import { DiaryNoteFormComponent } from './diary/diary-note-form/diary-note-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './shared/editor/editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  declarations: [
    AppComponent,
    DiaryOverviewComponent,
    LoginFormComponent,
    DiaryNoteComponent,
    DiaryNoteFormComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
