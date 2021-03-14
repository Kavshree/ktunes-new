import {Component} from '@angular/core';
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
    }
    `]
})

export class PlayListComponent {

    response; playListData=[];
    playListBlueprint={"playListName":"", "PlayListSongs":[]};
    constructor(private _service: KTuneService) {}
    ngOnInit() {
        this._service.getPlayList().subscribe(res => {
            this.response=res;
            //console.log(res);

            for(var i=0;i<this.response.length;i++) {
                let present = this.isPlaydataContainsPlaylist(this.response[i].playListName);

                if(present == -1) {
                 this.playListBlueprint.playListName = this.response[i].playListName;
                 this.playListBlueprint.PlayListSongs.push({ "songID": [this.response[i].songID]});
                this.playListData.push(this.playListBlueprint);
                } else {
                    this.playListData[present].PlayListSongs.push({ "songID": [this.response[i].songID]});
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