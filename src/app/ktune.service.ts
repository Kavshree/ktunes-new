import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class KTuneService {
    constructor(private _http: HttpClient) {}
    getGenres() {
        return this._http.get(`http://localhost:3000/genres`);
    }

    postSong(obj) {
        return this._http.post(`http://localhost:3000/songs`, obj)
    }

    getSongs() {
        return this._http.get(`http://localhost:3000/songs`);
    }

    getPlayList() {
        return this._http.get(`http://localhost:3000/playList`)
    }

    postPlayList(obj) {
        return this._http.post(`http://localhost:3000/playList`, obj)
    }

    getSongFromID(id) {
        return this._http.get(`http://localhost:3000/songs?id=${id}`);
    }

    /**Search */
    getSongSearch(field, val) {
        return this._http.get(`http://localhost:3000/songs?${field}_like=${val}`);
    }
}