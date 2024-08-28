import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Реализация защиты доступа к определенным маршрутам.
 *
 * Route guard for protecting access to secure routes.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   * Конструктор маршрутизации.
   *
   * Route guard constructor.
   *
   * @param authService Сервис для аутентификации пользователя.
   * @param authService Service for user authentication.
   * @param router Сервис для навигации по маршрутам.
   * @param router Router service for navigating between routes.
   */
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  /**
   * Метод для проверки доступа к защищенным маршрутам.
   *
   * Method to check access to protected routes.
   *
   * Проверяет, аутентифицирован ли пользователь. Если пользователь аутентифицирован,
   * разрешает доступ к маршруту. В противном случае перенаправляет на страницу входа и
   * возвращает false.
   *
   * Checks if the user is authenticated. If the user is authenticated,
   * it allows access to the route. Otherwise, it redirects to the login page
   * and returns false.
   *
   * @returns true, если пользователь аутентифицирован; иначе false.
   * @returns true if the user is authenticated; otherwise false.
   */
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
