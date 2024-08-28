/**
 * Интерфейс для представления пользователя.
 *
 * Interface for representing a user.
 */
export interface User {
  /**
   * Уникальный идентификатор пользователя.
   *
   * Unique identifier of the user.
   */
  id: string;

  /**
   * Логин пользователя.
   *
   * Login of the user.
   */
  login: string;

  /**
   * Пароль пользователя.
   *
   * Password of the user.
   */
  password: string;
}
