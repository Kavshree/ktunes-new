import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import  { KTuneService } from '../ktune.service';
import { CardCarouselComponent } from './cardcarousel.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'play-list',
    template: `<div>
    <div class="col-lg-12">
    <h3> Playlist <button class="btn btn-ktunes float-right" [routerLink]='["addPlaylist"]'>Create Playlist</button> </h3>
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



    </div>
    </div>
    
    
    
    
    <ng-template #content let-modal>
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Profile update</h4>
    <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <form>
      <div class="form-group">
        <label for="dateOfBirth">Date of birth</label>
        <div class="input-group">
          <input id="dateOfBirth" class="form-control" placeholder="yyyy-mm-dd" name="dp" ngbDatepicker #dp="ngbDatepicker">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary calendar" (click)="dp.toggle()" type="button"></button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template>

`,
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
    constructor(private _service: KTuneService, private modalService: NgbModal) {}

    ngOnInit() {
        this._service.getSongs().subscribe(res => {
            this.allSongs = res;
            this.getPlaylists();
        })
    } //ngOnInit

    getPlaylists() {
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
    }

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

      closeResult = '';
      open(content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    
      private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return `with: ${reason}`;
        }
      }
}