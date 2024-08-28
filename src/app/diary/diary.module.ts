import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DiaryOverviewComponent } from './diary-overview.component';

/**
 * Конфигурация маршрутов для модуля дневника.
 *
 * Routes configuration for the diary module.
 */
const routes: Routes = [
  {
    path: '',
    component: DiaryOverviewComponent,
  },
];

/**
 * Модуль для функциональности дневника.
 *
 * Module for diary functionality.
 */
@NgModule({
  /**
   * Компоненты, которые объявлены в этом модуле.
   *
   * Components declared in this module.
   */
  declarations: [],

  /**
   * Модули, которые импортируются в этом модуле.
   *
   * Modules imported in this module.
   */
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DiaryModule {}
