// Reference from: https://mikhail-cct.github.io/mobdev/wk7/#/7

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const FAV_EP = 'favouriteEpisodes';
const FAV_CHAR = 'favouriteCharacters';
//const UNFAV_EP = 'unfavouriteEpisodes';
//const UNFAV_CHAR = 'unfavouriteCharacters';



@Injectable({
    providedIn: 'root'
})
export class FavouriteService {

    constructor(private storage: Storage, private storageChar: Storage) { }

    // === EPISODES ===

    getAllFavouriteEpisodes() {
        return this.storage.get(FAV_EP);
    }
    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }
    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(FAV_EP, result);
            } else {
                return this.storage.set(FAV_EP, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(FAV_EP, result);
            }
        });
    }


    // ==== CHARACTERS ===

    getAllFavouriteCharacters() {
        return this.storageChar.get(FAV_CHAR);
    }
    isFavouriteChar(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }
    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(characterId);
                return this.storageChar.set(FAV_CHAR, result);
            } else {
                return this.storageChar.set(FAV_CHAR, [characterId]);
            }
        });
    }

    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storageChar.set(FAV_CHAR, result);
            }
        });
    }

}


/*
getAllUnfavouriteEpisodes() {
    return this.storage.get(UNFAV_EP);
}
isUnfavouriteEpisode(episodeId) {
    return this.getAllUnfavouriteEpisodes().then(result => {
        return result && result.indexOf(episodeId) !== -1;
    });
}


favouriteEpisode(episodeId) {
    this.removeUnfavouriteEpisode(episodeId);
    return this.getAllFavouriteEpisodes().then(result => {
        if (result) {
            result.push(episodeId);
            return this.storage.set(FAV_EP, result);
        } else {
            return this.storage.set(FAV_EP, [episodeId]);
        }
    });
}

unfavouriteEpisode(episodeId) {
    this.removeFavouriteEpisode(episodeId);
    return this.getAllFavouriteEpisodes().then(result => {
        if (result) {
            result.push(episodeId);
            return this.storage.set(UNFAV_EP, result);
        } else {
            return this.storage.set(UNFAV_EP, [episodeId]);
        }
    });
}

removeFavouriteEpisode(episodeId) {
    return this.getAllFavouriteEpisodes().then(result => {
        if (result && result.indexOf(episodeId) !== -1) {
            var index = result.indexOf(episodeId);
            result.splice(index, 1);
            return this.storage.set(FAV_EP, result);
        }
    });
}

removeUnfavouriteEpisode(episodeId) {
    return this.getAllUnfavouriteEpisodes().then(result => {
        if (result && result.indexOf(episodeId) !== -1) {
            var index = result.indexOf(episodeId);
            result.splice(index, 1);
            return this.storage.set(UNFAV_EP, result);
        }
    });
}

noStatusEpisode(episodeId) {
    this.removeUnfavouriteEpisode(episodeId);
    this.removeFavouriteEpisode(episodeId);
}
*/


/*
// CHARACTERS

getAllFavouriteCharacters() {
    return this.storageChar.get(FAV_CHAR);
}

getAllUnfavouriteCharacters() {
    return this.storageChar.get(UNFAV_CHAR);
}

isFavourite(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
        return result && result.indexOf(characterId) !== -1;
    });
}


isUnfavouriteCharacter(characterId) {
    return this.getAllUnfavouriteCharacters().then(result => {
        return result && result.indexOf(characterId) !== -1;
    });
}

favouriteCharacter(characterId) {
    this.removeUnfavouriteCharacter(characterId);
    return this.getAllFavouriteCharacters().then(result => {
        if (result) {
            result.push(characterId);
            return this.storageChar.set(FAV_CHAR, result);
        } else {
            return this.storageChar.set(FAV_CHAR, [characterId]);
        }
    });
}

unfavouriteCharacter(characterId) {
    this.removeFavouriteCharacter(characterId);
    return this.getAllFavouriteCharacters().then(result => {
        if (result) {
            result.push(characterId);
            return this.storageChar.set(UNFAV_CHAR, result);
        } else {
            return this.storageChar.set(UNFAV_CHAR, [characterId]);
        }
    });
}

removeFavouriteCharacter(characterId) {
    return this.getAllFavouriteCharacters().then(result => {
        if (result && result.indexOf(characterId) !== -1) {
            var index = result.indexOf(characterId);
            result.splice(index, 1);
            return this.storageChar.set(FAV_CHAR, result);
        }
    });
}

removeUnfavouriteCharacter(characterId) {
    return this.getAllUnfavouriteCharacters().then(result => {
        if (result && result.indexOf(characterId) !== -1) {
            var index = result.indexOf(characterId);
            result.splice(index, 1);
            return this.storageChar.set(UNFAV_CHAR, result);
        }
    });
}

noStatusCharacter(characterId) {
    this.removeUnfavouriteCharacter(characterId);
    this.removeFavouriteCharacter(characterId);
}

  */

