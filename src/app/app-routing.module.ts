import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { DiaryNoteFormComponent } from './diary/diary-note-form/diary-note-form.component';
import { DiaryOverviewComponent } from './diary/diary-overview.component';
import { AuthGuard } from './core/auth.guard';

/**
 * Конфигурация маршрутов приложения.
 *
 * Application routes configuration.
 */
const routes: Routes = [
  /**
   * Маршрут для страницы входа.
   *
   * Route for the login page.
   */
  { path: 'login', component: LoginFormComponent },

  /**
   * Маршрут для обзора дневника с ленивой загрузкой модуля.
   *
   * Route for diary overview with lazy-loaded module.
   */
  {
    path: 'diary-overview',
    loadChildren: () =>
      import('./diary/diary.module').then((m) => m.DiaryModule),
  },

  /**
   * Маршрут для создания новой записи в дневнике.
   *
   * Route for creating a new diary note.
   *
   * Защищен `AuthGuard`, который проверяет аутентификацию пользователя.
   * Protected by `AuthGuard` that checks user authentication.
   */
  {
    path: 'create',
    component: DiaryNoteFormComponent,
    canActivate: [AuthGuard],
  },

  /**
   * Маршрут для обновления существующей записи в дневнике.
   *
   * Route for updating an existing diary note.
   *
   * Защищен `AuthGuard`, который проверяет аутентификацию пользователя.
   * Protected by `AuthGuard` that checks user authentication.
   */
  {
    path: 'update/:id',
    component: DiaryNoteFormComponent,
    canActivate: [AuthGuard],
  },

  /**
   * Маршрут по умолчанию, перенаправляющий на страницу входа.
   *
   * Default route redirecting to the login page.
   */
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

/**
 * Модуль маршрутизации приложения.
 *
 * Application routing module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
