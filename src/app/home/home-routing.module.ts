import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { Pagina1Page } from '../pagina1/pagina1.page';
import { Pagina2Page } from '../pagina2/pagina2.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'pagina1',
    component: Pagina1Page,
  },
  {
    path: 'pagina2',
    component: Pagina2Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
