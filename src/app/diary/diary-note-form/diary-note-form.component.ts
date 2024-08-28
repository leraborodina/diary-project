import { Component, ElementRef, ViewChild } from '@angular/core';
import { DiaryService } from '../services/diary.service';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/**
 * Компонент формы для создания и редактирования записей дневника.
 *
 * This component provides a form for creating and editing diary notes.
 */
@Component({
  selector: 'app-diary-note-form',
  templateUrl: './diary-note-form.component.html',
  styleUrls: ['./diary-note-form.component.css'],
})
export class DiaryNoteFormComponent {
  /**
   * Элемент для выбора файла изображения.
   *
   * File input element for selecting an image.
   */
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef<HTMLInputElement>;

  /**
   * Изображение, загруженное пользователем, представлено в виде строки или массива байтов.
   *
   * User-uploaded image represented as a string or array buffer.
   */
  image: string | ArrayBuffer | null = null;

  /**
   * Описание записи.
   *
   * Note description.
   */
  description: string = '';

  /**
   * Максимальный размер файла изображения (в байтах).
   *
   * Maximum image file size (in bytes).
   */
  maxSize: number = 1024 * 1024 * 2;

  /**
   * Максимальная ширина изображения.
   *
   * Maximum image width.
   */
  maxWidth: number = 800;

  /**
   * Максимальная высота изображения.
   *
   * Maximum image height.
   */
  maxHeight: number = 800;

  /**
   * Имя загруженного файла изображения.
   *
   * Name of the uploaded image file.
   */
  fileName: string | null = null;

  /**
   * ID записи, если форма используется для редактирования.
   *
   * Note ID, if the form is used for editing.
   */
  noteId: string | null = null;

  /**
   * Заголовок формы.
   *
   * Form title.
   */
  formTitle: string = 'Создание новой записи';

  /**
   * Ссылка на класс редактора CKEditor.
   *
   * Reference to the CKEditor class.
   */
  public Editor = ClassicEditor;

  /**
   * Конструктор компонента.
   *
   * Component constructor.
   *
   * @param diaryService Сервис для работы с записями дневника.
   * @param router Сервис для навигации по маршрутам.
   * @param route Сервис для работы с параметрами маршрута.
   */
  constructor(
    private diaryService: DiaryService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  /**
   * Инициализация компонента.
   *
   * Component initialization.
   */
  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id');
    if (this.noteId) {
      this.formTitle = 'Обновление записи';
      this.diaryService.getUserNotes().subscribe((notes) => {
        const note = notes.find((n) => n.id === this.noteId);

        if (note) {
          this.description = note.description;
          this.image = note.image;
        }
      });
    }
  }

  /**
   * Обработчик изменения файла.
   *
   * File change handler.
   *
   * @param event Событие изменения файла.
   */
  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.fileName = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        this.resizeImage(dataUrl, file.type);
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(file);
      input.value = '';
    } else {
      this.fileName = null;
    }
  }

  /**
   * Изменение размера изображения.
   *
   * Resize the image.
   *
   * @param dataUrl URL данных изображения.
   * @param fileType Тип файла изображения.
   */
  private resizeImage(dataUrl: string, fileType: string) {
    const img = new Image();
    img.src = dataUrl;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let { width, height } = img;

      if (width > this.maxWidth) {
        height *= this.maxWidth / width;
        width = this.maxWidth;
      }
      if (height > this.maxHeight) {
        width *= this.maxHeight / height;
        height = this.maxHeight;
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      this.image = canvas.toDataURL(fileType);
    };

    img.onerror = (error) => {
      console.error('Error loading image:', error);
    };
  }

  /**
   * Удаление изображения и сброс имени файла.
   *
   * Remove the image and reset the file name.
   */
  onRemoveImage() {
    this.image = '';
    this.fileName = '';
  }

  /**
   * Отправка формы.
   *
   * Submit the form.
   */
  onSubmit() {
    if (this.noteId) {
      this.diaryService.updateNote(this.noteId, {
        description: this.description,
        image: this.image,
      });
    } else {
      this.diaryService.addNote({
        description: this.description,
        image: this.image,
      });
    }
    this.router.navigate(['/diary-overview']);
  }

  /**
   * Вызов диалогового окна выбора файла.
   *
   * Trigger the file input dialog.
   */
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  /**
   * Обработка нажатия на кнопку "Назад".
   *
   * Handle the back button click.
   */
  onBackClick() {
    this.router.navigate(['/diary-overview']);
  }
}
