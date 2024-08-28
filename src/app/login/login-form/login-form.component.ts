import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { UserService } from './services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Компонент для формы входа пользователя.
 *
 * Component for the user login form.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  /**
   * Форма входа, содержащая поля для логина и пароля.
   *
   * The login form containing fields for the user's login and password.
   */
  loginForm: FormGroup;

  /**
   * Сообщение об ошибке, отображаемое при неправильных данных для входа.
   *
   * Error message displayed when login credentials are incorrect.
   */
  errorMessage: string | null = null;

  /**
   * Конструктор компонента.
   *
   * Component constructor.
   *
   * @param authService Сервис для аутентификации пользователя.
   * @param authService Service for user authentication.
   * @param router Сервис для навигации по маршрутам.
   * @param router Router service for navigating between routes.
   * @param userService Сервис для работы с данными пользователей.
   * @param userService Service for managing user data.
   * @param formBuilder Сервис для создания формы входа.
   * @param formBuilder Service for creating the login form.
   */
  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  /**
   * Метод для обработки входа пользователя.
   *
   * Method to handle user login.
   *
   * Проверяет, может ли пользователь аутентифицироваться с предоставленным логином и паролем.
   * If authentication is successful, navigates to the diary overview page.
   * If authentication fails, sets an error message.
   */
  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.errorMessage = null;

    const user = this.userService.getUserByLogin(
      this.loginForm.get('login')?.value,
    );

    if (!user) {
      this.errorMessage = 'Пользователь не найден';
    } else if (
      !this.authService.authenticate(
        this.loginForm.get('login')?.value,
        this.loginForm.get('password')?.value,
      )
    ) {
      this.errorMessage = 'Неверный пароль';
    } else {
      this.router.navigate(['/diary-overview']);
    }
  }
}
