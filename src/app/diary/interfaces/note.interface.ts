/**
 * Интерфейс для представления записи дневника.
 *
 * Interface representing a diary note.
 */
export interface Note {
  /**
   * Уникальный идентификатор записи.
   *
   * Unique identifier for the note.
   */
  id?: string;

  /**
   * Время создания записи в формате строки.
   *
   * Creation time of the note as a string.
   */
  time?: string;

  /**
   * Описание записи.
   *
   * Description of the note.
   */
  description: string;

  /**
   * Изображение, связанное с записью, представлено в виде строки или массива байтов, или null.
   *
   * Image associated with the note, represented as a string or array buffer, or null if absent.
   */
  image: string | ArrayBuffer | null;

  /**
   * Идентификатор пользователя, которому принадлежит запись.
   *
   * User ID to whom the note belongs.
   */
  userId?: string;
}
