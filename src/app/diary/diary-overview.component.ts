import { Component } from '@angular/core';
import { DiaryService } from './services/diary.service';
import { Router } from '@angular/router';
import { Note } from './interfaces/note.interface';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';

/**
 * Компонент для отображения обзора записей дневника.
 *
 * Component for displaying the diary notes overview.
 */
@Component({
  selector: 'app-diary-overview',
  templateUrl: './diary-overview.component.html',
  styleUrls: ['./diary-overview.component.css'],
})
export class DiaryOverviewComponent {
  /**
   * Observable для заметок текущего пользователя.
   *
   * Observable for the current user's notes.
   */
  userNotes$: Observable<Note[]>;

  /**
   * Конструктор компонента.
   *
   * Component constructor.
   *
   * @param {DiaryService} diaryService Сервис для работы с записями дневника.
   * @param {Router} router Сервис для навигации по маршрутам.
   * @param {AuthService} authService Сервис для работы с аутентификацией пользователей.
   */
  constructor(
    private diaryService: DiaryService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.userNotes$ = this.diaryService.getUserNotes();
  }

  /**
   * Получение заметок текущего пользователя.
   *
   * Get the notes of the current user.
   *
   * @returns {Observable<Note[]>} Массив заметок текущего пользователя.
   * @returns {Observable<Note[]>} Array of notes for the current user.
   */
  get userNotes() {
    return this.diaryService.getUserNotes();
  }

  /**
   * Получение логина текущего пользователя.
   *
   * Get the login of the current user.
   *
   * @returns {string | null} Логин текущего пользователя.
   * @returns {string | null} Current user's login.
   */
  get userLogin() {
    return this.authService.getCurrentUserLogin();
  }

  /**
   * Обработка создания новой записи.
   *
   * Handle the creation of a new note.
   */
  onCreate() {
    this.router.navigate(['/create']);
  }

  /**
   * Обработка редактирования записи.
   *
   * Handle the editing of a note.
   *
   * @param {string} [noteId] Уникальный идентификатор заметки для редактирования.
   * @param {string} [noteId] Unique identifier of the note to be edited.
   */
  onEdit(noteId?: string) {
    this.router.navigate(['/update', noteId]);
  }

  /**
   * Обработка выхода из системы.
   *
   * Handle user logout.
   */
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
