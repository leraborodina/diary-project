import { Injectable } from '@angular/core';
import { UserService } from '../login/login-form/services/user.service';

/**
 * Сервис для аутентификации и управления сессиями пользователя.
 *
 * Service for user authentication and session management.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Ключ для хранения идентификатора текущего пользователя в localStorage.
   *
   * Key for storing the current user's ID in localStorage.
   */
  private readonly currentUserKey = 'currentUserId';

  /**
   * Логин текущего пользователя.
   *
   * Login of the current user.
   */
  private currentUserLogin: string | null = null;

  /**
   * Конструктор сервиса.
   *
   * Service constructor.
   *
   * @param userService Сервис для управления пользователями.
   * @param userService User service for managing user data.
   */
  constructor(private userService: UserService) {
    this.loadCurrentUserId();
  }

  /**
   * Проверяет, аутентифицирован ли пользователь.
   *
   * Checks if the user is authenticated.
   *
   * @returns true, если пользователь аутентифицирован; иначе false.
   * @returns true if the user is authenticated; otherwise false.
   */
  isAuthenticated(): boolean {
    return this.getCurrentUserId() !== null;
  }

  /**
   * Выполняет аутентификацию пользователя по логину и паролю.
   *
   * Authenticates the user by login and password.
   *
   * @param login Логин пользователя.
   * @param login User's login.
   * @param password Пароль пользователя.
   * @param password User's password.
   * @returns true, если аутентификация успешна; иначе false.
   * @returns true if authentication is successful; otherwise false.
   */
  authenticate(login: string, password: string): boolean {
    const user = this.userService.getUserByLogin(login);
    if (user && user.password === password) {
      this.setCurrentUserId(user.id);
      this.currentUserLogin = user.login;
      return true;
    }
    return false;
  }

  /**
   * Возвращает логин текущего пользователя.
   *
   * Returns the login of the current user.
   *
   * @returns Логин текущего пользователя или null, если пользователь не аутентифицирован.
   * @returns Current user's login or null if the user is not authenticated.
   */
  getCurrentUserLogin(): string | null {
    return this.currentUserLogin;
  }

  /**
   * Возвращает идентификатор текущего пользователя из localStorage.
   *
   * Returns the current user's ID from localStorage.
   *
   * @returns Идентификатор текущего пользователя или null, если пользователь не аутентифицирован.
   * @returns Current user's ID or null if the user is not authenticated.
   */
  getCurrentUserId(): string | null {
    return localStorage.getItem(this.currentUserKey);
  }

  /**
   * Выполняет выход пользователя из системы.
   *
   * Logs the user out of the system.
   */
  logout(): void {
    localStorage.removeItem(this.currentUserKey);
    this.currentUserLogin = null;
  }

  /**
   * Устанавливает идентификатор текущего пользователя в localStorage.
   *
   * Sets the current user's ID in localStorage.
   *
   * @param userId Идентификатор пользователя.
   * @param userId User's ID.
   */
  private setCurrentUserId(userId: string): void {
    localStorage.setItem(this.currentUserKey, userId);
  }

  /**
   * Загружает идентификатор текущего пользователя из localStorage и обновляет логин.
   *
   * Loads the current user's ID from localStorage and updates the login.
   */
  private loadCurrentUserId(): void {
    const userId = localStorage.getItem(this.currentUserKey);
    if (userId) {
      const user = this.userService.getUserById(userId);
      this.currentUserLogin = user ? user.login : null;
    }
  }
}
