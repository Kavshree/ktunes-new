import { Component } from '@angular/core';
import { Router } from '@angular/router';
import  { KTuneService } from '../ktune.service';


@Component({
    selector: 'add-playlist',
    template : `
    <div class="col-lg-12">
    <h3> Create Playlist </h3>
    <hr class="ktunesLine" />


    <form>
        <div class="form-row">
        <div class="form-group col-lg-3 col-md-6 col-sm-6">
            <label>Playlist Name</label>
            <input class="form-control" type="text" name="newPlaylistName" [(ngModel)]="newPlaylistName" />
        </div>

        <div class="form-group col-lg-3 col-md-6 col-sm-6">
            <label>Songs</label>
            <ng-multiselect-dropdown name="selectsongs"
                [settings]="dropdownSettings"
                [placeholder]="'Select Songs'"
                [data]="dropdownList"
                [(ngModel)]="selectedItems"
                (onSelect)="onItemSelect($event)"
                (onSelectAll)="onSelectAll($event)"
                >
                </ng-multiselect-dropdown>
        </div>

        

        </div>
        <div class="form-group">
        <button class="btn btn-ktunes" (click)="submit()">Save</button>
        </div>
    </form>


    </div>
    `,
    styles: [`
    .selected-item {background-color: #00bc8c !important;}
    `]
})

export class AddPlaylistComponent {
    constructor(private _router: Router, private _service: KTuneService){}
    newPlaylistName;
    dropdownList; selectedItems = []; dropdownSettings = {};  

    ngOnInit() {
        this._service.getSongs().subscribe(res => {
            this.dropdownList = res;
        })

          this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'songname',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: true
          };
    }

    onItemSelect(item: any) {
        console.log(item);
      }
      onSelectAll(items: any) {
        console.log(items);
      }

      submit() {
        this.selectedItems.forEach((item, index, array) => {
            let playListObj = {playListName: this.newPlaylistName, songID: null};
            playListObj.songID = item.id;
           this._service.postPlayList(playListObj).subscribe(res => {
            if (index === (array.length -1)) {
                this._router.navigate(['/playList']);
            }
            //this._router.navigate(['/playList']);
            })

        })
      }
   
}