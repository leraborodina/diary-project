import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { AuthService } from '../../core/auth.service';
import { BehaviorSubject } from 'rxjs';

/**
 * Сервис для управления записями дневника.
 *
 * Service for managing diary notes.
 */
@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  /**
   * Массив заметок пользователя.
   *
   * Array of user notes.
   */
  private notes: Note[] = [];

  /**
   * Subject для хранения и уведомления об изменениях заметок.
   *
   * Subject for storing and notifying about note changes.
   */
  private notesSubject: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(
    [],
  );

  /**
   * Конструктор сервиса.
   *
   * Service constructor.
   *
   * @param {AuthService} authService Сервис для работы с аутентификацией пользователей.
   * @param {AuthService} authService Authentication service.
   */
  constructor(private authService: AuthService) {
    this.loadNotes();
  }

  /**
   * Метод для загрузки заметок пользователя из localStorage.
   *
   * Load user notes from localStorage.
   */
  private loadNotes() {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      const notes = localStorage.getItem(`notes_${userId}`);
      this.notes = notes ? JSON.parse(notes) : [];
      this.notesSubject.next(this.notes);
    }
  }

  /**
   * Метод для сохранения заметок пользователя в localStorage.
   *
   * Save user notes to localStorage.
   */
  private saveNotes() {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      localStorage.setItem(`notes_${userId}`, JSON.stringify(this.notes));
    }
  }

  /**
   * Метод для получения заметок текущего пользователя.
   *
   * Get notes of the current user.
   *
   * @returns {Observable<Note[]>} Observable с массивом заметок текущего пользователя.
   * @returns {Observable<Note[]>} Observable with an array of notes for the current user.
   */
  getUserNotes() {
    return this.notesSubject.asObservable();
  }

  /**
   * Метод для добавления новой заметки.
   *
   * Add a new note.
   *
   * @param {Note} newNote Объект новой заметки.
   * @param {Note} newNote New note object.
   */
  addNote(newNote: Note) {
    const userId = this.authService.getCurrentUserId();
    if (userId) {
      const note: Note = {
        id: new Date().getTime().toString(),
        time: new Date().toISOString(),
        description: newNote.description,
        image: newNote.image,
        userId: userId,
      };
      this.notes.unshift(note);
      this.saveNotes();
      this.notesSubject.next(this.notes);
    } else {
      console.error('User not authenticated');
    }
  }

  /**
   * Метод для обновления заметки по id.
   *
   * Update a note by id.
   *
   * @param {string} id Уникальный идентификатор заметки.
   * @param {string} id Note's unique identifier.
   * @param {Partial<Note>} updatedNote Частично обновленный объект заметки.
   * @param {Partial<Note>} updatedNote Partially updated note object.
   */
  updateNote(id: string, updatedNote: Partial<Note>) {
    const userId = this.authService.getCurrentUserId();
    const note = this.notes.find(
      (note) => note.id === id && note.userId === userId,
    );
    if (note) {
      note.description = updatedNote.description ?? note.description;
      note.image = updatedNote.image ?? note.image;
      this.saveNotes();
      this.notesSubject.next(this.notes);
    } else {
      console.error('Note not found or user not authorized');
    }
  }

  /**
   * Метод для удаления заметки по id.
   *
   * Remove a note by id.
   *
   * @param {string} [id] Уникальный идентификатор заметки (необязательный параметр).
   * @param {string} [id] Unique identifier of the note (optional parameter).
   */
  removeNote(id?: string) {
    const userId = this.authService.getCurrentUserId();
    this.notes = this.notes.filter(
      (note) => note.id !== id || note.userId !== userId,
    );
    this.saveNotes();
    this.notesSubject.next(this.notes);
  }
}
