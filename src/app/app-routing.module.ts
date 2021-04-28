import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaSelectionIndexComponent } from './modules/area-selection/area-selection-index/area-selection-index.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AreaSelectionIndexComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: AreaSelectionIndexComponent },
      // { path: 'cursos', loadChildren: () => import('./pages/curso-pages/curso-pages.module').then(m => m.CursoPagesModule), canActivate: [RouterGuard], canLoad: [RouterGuard], data: ['CURSO_LEITURA'] },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
