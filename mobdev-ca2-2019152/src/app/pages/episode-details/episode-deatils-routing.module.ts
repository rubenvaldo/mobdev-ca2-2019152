import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeDeatilsPage } from './episode-deatils.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodeDeatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeDeatilsPageRoutingModule {}
