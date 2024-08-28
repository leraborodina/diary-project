import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/**
 * Компонент редактора текста на основе CKEditor.
 *
 * This component provides a text editor based on CKEditor.
 */
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  /**
   * Ссылка на класс редактора CKEditor.
   *
   * Reference to the CKEditor class.
   */
  public Editor = ClassicEditor;

  /**
   * Конфигурация для редактора.
   *
   * Configuration for the editor.
   */
  public editorConfig = {
    // к сожалению, ограничение количества инструментов toolbar не сработало, и редактор показывает стандарный набор инструментов
    toolbar: {
      items: ['bold', 'italic', 'underline', 'undo', 'redo'],
    },
  };
}
