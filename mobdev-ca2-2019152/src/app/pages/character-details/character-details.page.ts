import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    isFavourite = false;
    isUnfavorite = false;
    characterId = null;

     constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }
 
    ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.api.getCharacter (this.characterId).subscribe(res => {
      this.character = res;
    });
 
    this.favouriteService.isFavourite(this.characterId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteCharacter() {
    this.favouriteService.favouriteCharacter(this.characterId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteFilm() {
    this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
      this.isFavourite = false;
    });
  }
 
}