import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

/**
 * Сервис для управления пользователями.
 *
 * Service for managing users.
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * Массив пользователей, хранит данные о пользователях.
   *
   * Array of users, stores user data.
   */
  private users: User[] = [
    {
      id: 'u1',
      login: 'user1',
      password: 'password1',
    },
    {
      id: 'u2',
      login: 'user2',
      password: 'password2',
    },
  ];

  /**
   * Получение пользователя по логину.
   *
   * Get a user by login.
   *
   * @param login Логин пользователя.
   * @param login User's login.
   * @returns Пользователь с указанным логином или undefined, если пользователь не найден.
   * @returns User with the specified login or undefined if not found.
   */
  getUserByLogin(login: string): User | undefined {
    return this.users.find((user) => user.login === login);
  }

  /**
   * Проверка корректности логина и пароля пользователя.
   *
   * Validate user login and password.
   *
   * @param login Логин пользователя.
   * @param login User's login.
   * @param password Пароль пользователя.
   * @param password User's password.
   * @returns true, если логин и пароль совпадают; иначе false.
   * @returns true if login and password match; otherwise false.
   */
  validateUser(login: string, password: string): boolean {
    const user = this.getUserByLogin(login);
    return user ? user.password === password : false;
  }

  /**
   * Получение пользователя по идентификатору.
   *
   * Get a user by id.
   *
   * @param id Уникальный идентификатор пользователя.
   * @param id Unique identifier of the user.
   * @returns Пользователь с указанным идентификатором или undefined, если пользователь не найден.
   * @returns User with the specified id or undefined if not found.
   */
  getUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
