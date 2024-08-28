import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { DiaryService } from '../services/diary.service';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale/ru';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Компонент для отображения записи в дневнике.
 *
 * This component displays a diary note.
 */
@Component({
  selector: 'app-diary-note',
  templateUrl: './diary-note.component.html',
  styleUrls: ['./diary-note.component.css'],
})
export class DiaryNoteComponent {
  /**
   * Запись дневника, переданная компоненту.
   *
   * Diary note passed to the component.
   */
  @Input({ required: true }) note!: Note;

  /**
   * Событие, которое испускается при редактировании записи.
   *
   * Event emitted when editing the note.
   */
  @Output() edit = new EventEmitter<string>();

  /**
   * Безопасное описание записи, предназначенное для отображения в HTML.
   *
   * Safe description of the note, intended for display in HTML.
   */
  safeDescription: SafeHtml;

  /**
   * Конструктор компонента.
   *
   * Constructor of the component.
   *
   * @param diaryService Сервис для работы с записями дневника.
   * @param sanitizer Сервис для санитизации HTML.
   */
  constructor(
    private diaryService: DiaryService,
    private sanitizer: DomSanitizer,
  ) {
    this.safeDescription = '';
  }

  /**
   * Инициализация компонента.
   *
   * Component initialization.
   */
  ngOnInit() {
    this.safeDescription = this.sanitizer.bypassSecurityTrustHtml(
      this.note.description,
    );
  }

  /**
   * Форматирование даты записи.
   *
   * Format the note's date.
   *
   * @param dateString Дата в формате строки.
   * @returns Отформатированная дата в виде строки.
   */
  formatDate(dateString?: string): string {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    return format(date, 'dd.MM.yyyy HH:mm', { locale: ru });
  }

  /**
   * Обработчик события редактирования записи.
   *
   * Handler for the edit event.
   */
  onEdit() {
    this.edit.emit(this.note.id);
  }

  /**
   * Удаление записи из дневника.
   *
   * Remove the note from the diary.
   */
  deleteNote() {
    this.diaryService.removeNote(this.note?.id);
  }
}
