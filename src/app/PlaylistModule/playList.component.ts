import {Component} from '@angular/core';
import  { KTuneService } from '../ktune.service';

@Component({
    selector: 'play-list',
    template: `<div>
        Playlist
    </div>`
})

export class PlayListComponent {
    playListIDs;
    constructor(private _service: KTuneService) {}
    ngOnInit() {
        this._service.getPlayList().subscribe(res => {
            this.playListIDs=res;
            console.log(res)
           if(this.playListIDs.length > 0) {
                
           }
        })
        
    }
}