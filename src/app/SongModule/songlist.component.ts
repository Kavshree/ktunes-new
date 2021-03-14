import { Component, ElementRef, ViewChild } from '@angular/core';
//import { CardCarouselComponent } from '../PlaylistModule/cardcarousel.component';
import { Router } from '@angular/router';
import  { KTuneService } from '../ktune.service';

@Component({
    selector: 'song-list',
    template: `<div>
    <h3>Song List <button class="btn btn-ktunes float-right" (click)="addSong()">Add song</button></h3>
    <hr class="ktunesLine" />
    <div class="card-columns card-deck">
        <div class="card mb-3" style="min-width: 18rem;" *ngFor="let song of songListData">
            <div class="card-header" [ngClass]="song.id == currID ? 'active-card' : '' ">{{song.songname}}</div>
            <div class="card-body">
                <h5 class="card-title"><label>Singer:</label> {{song.singer}}</h5>
                <section class="card-text">
                    <p><label>Album: </label> {{song.album}}</p>
                    <p><label>Genre: </label> {{song.genre}}</p>
                </section>
                <div class="overlay text-center">
                <p class="info cursor-pointer btn-group">
                    <button class="btn" title="add to favourites" (click)="addtoFav(song.id)">
                        <i class="fa fa-heart-o fa-2x col-lg-2"></i>
                    </button>
                    <button class="btn" title="Play" (click)="play(song.id)">
                        <i class="fa fa-play fa-2x col-lg-2"></i>
                    </button>
                    <button class="btn" title="add to playlist" (click)="addtoPlaylist(song.id)">
                        <i class="fa fa-plus fa-2x col-lg-2"></i>
                    </button>
                </p>
                </div>
            </div>
        </div>
    </div>
    

    <div>
    <div class="card">
    <div class="card-body">
    <p *ngIf="currSong.songname !== '' " class="col-lg-3 ktunes-font">
    <marquee onmouseover="this.stop();" onmouseout="this.start();">Playing: {{currSong?.songname}} | Singer: {{currSong?.singer}}</marquee></p>
    <audio controls class= "audio" #player width="100%" height="30">
        <source src="http://listen.vo.llnwd.net/g3/prvw/4/7/1/4/6/2283564174.mp3" type="audio/mpeg">
    </audio>
    </div> <!--card-body-->
    </div>

    </div>

    <!--<div *ngFor="let v of views">
        <card-carousel [InnerCards]="InnerCards"></card-carousel>
    </div>-->
</div>

  `,
    styles: [`
        .btn .fa-heart-o:hover {color:red;}
        .btn .fa-play:hover, .btn .fa-plus:hover{color: #00bc8c;}
        audio{width: 100%;}
        .active-card {background-color: #00bc8c; }
    `]
})

export class SongListComponent{
    constructor(private _router: Router, private _service: KTuneService) {}
    @ViewChild('player') playerRef: ElementRef; currID=0;
    songListData; currSong={songname:"", singer:"", album: "",genre:"", songid:"", id:""};
    ngOnInit() {
        this._service.getSongs().subscribe(res => {
            this.songListData = res;
        })
        
    }
    views = [1,2,3]
    InnerCards = ["card1","card2","card3","card4","card5","card6","card70","card8"];


    addSong() {
        this._router.navigate(['/SongList/addSong'])
    }

    addtoFav(id) {

    }

    play(id) {
        this.currID = id;
        this._service.getSongFromID(id).subscribe(res => {
            this.currSong = res[0];
            console.log(this.playerRef.nativeElement)
        })
    }

    addtoPlaylist(id) {
        let playListObj = {"songID": id, "playListName": "Playlist-1"}
        this._service.postPlayList(playListObj).subscribe(res => {
            alert(`Posted to play list`)
        })
    }
}