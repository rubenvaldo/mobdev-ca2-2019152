import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeDeatilsPageRoutingModule } from './episode-deatils-routing.module';

import { EpisodeDeatilsPage } from './episode-deatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeDeatilsPageRoutingModule
  ],
  declarations: [EpisodeDeatilsPage]
})
export class EpisodeDeatilsPageModule {}
