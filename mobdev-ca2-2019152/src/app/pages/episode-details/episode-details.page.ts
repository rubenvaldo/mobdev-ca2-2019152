import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from 'src/app/services/favourite.service';
@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {
    episode: any;
    isFavorite = false;
    episodeId = null;
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }
 
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res;
    });
 
    this.favouriteService.isFavourite(this.episodeId).then(isFav => {
      this.isFavorite = isFav;
    });
  }
 
  favouriteFilm() {
    this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
      this.isFavorite = true;
    });
  }
 
  unfavouriteFilm() {
    this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
      this.isFavorite = false;
    });
  }
 
}