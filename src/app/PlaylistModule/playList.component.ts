import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import  { KTuneService } from '../ktune.service';
import { CardCarouselComponent } from './cardcarousel.component';


@Component({
    selector: 'play-list',
    template: `<div>
    <div class="col-lg-12">
    <h3> Playlist </h3>
    <hr class="ktunesLine" />

    <div class="card-columns card-deck">
        <div class="card mb-3" style="min-width: 18rem;" *ngFor="let play of playListData">
            <div class="card-header">{{play.playListName | uppercase }}</div>
        <div class="flex-nowrap">
            <div class="list-group" *ngFor="let p of play.PlayListSongs">
                <div class="list-group-item">
                   <p>Song {{p.songname}} {{p.songID}}</p>
                   <p class="text-muted"> Album: {{ getSongDetailsFromID(p.songID, "album") }} </p>
                </div>
            </div>
        </div>
        </div>
    </div>






        <div  id="div1" 
        (drop)="drop($event)" 
        (dragover)="allowDrop($event)">
            <img 
            src="https://images.pexels.com/photos/658687/pexels-photo-658687.jpeg?auto=compress&cs=tinysrgb&h=350" 
            draggable="true" 
            (dragstart)="drag($event)" 
            id="drag1"
            width="88" 
            height="31">
        </div>

        <div id="div2" 
        (drop)="drop($event)" 
        (dragover)="allowDrop($event)">
        </div>
    </div>
    </div>`,
    styles: [`
    #div1, #div2 {
        float: left;
        width: 100px;
        height: 35px;
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    },
    `]
})

export class PlayListComponent {
    response; playListData=[];allSongs;;
    playListBlueprint={"playListName":"", "PlayListSongs":[]};
    constructor(private _service: KTuneService) {}
    ngOnInit() {

        this._service.getSongs().subscribe(res => {
            this.allSongs = res;
        })

        this._service.getPlayList().subscribe(res => {
            this.response=res;
            //console.log(res);

            for(var i=0;i<this.response.length;i++) {
                let present = this.isPlaydataContainsPlaylist(this.response[i].playListName);
                let sName = this.getSongDetailsFromID(this.response[i].songID, "songname");
                 console.log(sName)

                if(present == -1) {
                 this.playListBlueprint.playListName = this.response[i].playListName;
                 this.playListBlueprint.PlayListSongs.push({ "songID": this.response[i].songID, "songname": sName} );
                this.playListData.push(this.playListBlueprint);
                } else {
                    this.playListData[present].PlayListSongs.push({ "songID": this.response[i].songID, "songname": sName});
                }
                
                this.playListBlueprint={"playListName":"", "PlayListSongs":[]};
            }
            console.log(this.playListData)
            
        })
        
    } //ngOnInit

    isPlaydataContainsPlaylist(listName) {
        let indexVal=-1;
        if(this.playListData.length > 0) {
            for(var i=0;i<this.playListData.length;i++) {
                if(this.playListData[i].playListName == listName) {
                    indexVal = i;
                }
            }
        } 
        return indexVal;
    }

    getSongDetailsFromID(id, field) {
        let songFromID; 
        for(var i=0;i<this.allSongs.length; i++) {
            if(this.allSongs[i].id == id) {
                songFromID = this.allSongs[i][field]
            }
        }
        return songFromID;
    }




    drop(ev) {
        ev.preventDefault();
        console.log(ev.dataTransfer.getData("text"))
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        
      }
    
      allowDrop(ev) {
        ev.preventDefault();
      }
    
      drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }
}