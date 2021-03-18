import { Component, ElementRef, ViewChild } from '@angular/core';
import  { KTuneService } from '../ktune.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:  'edit-song',
    template: `<div>
       <div class="col-lg-12">
       <h3> Edit song <small class="text-muted">({{this.currentEditSong?.songname}})</small> </h3>
       <hr class="ktunesLine" />
        <form [formGroup]="songForm">
        <div class="form-row">
        <div class="form-group col-md-3">
            <label>Song</label>
            <input #fileInput id="file" class="form-control-file" type="File" name="fileupload" (change)="upload($event)">
        </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3">
            <label>Album</label>
            <input type="text" class="form-control" placeholder="Album" formControlName="album">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3">
            <label>Singer</label>
            <input type="text" class="form-control" placeholder="Singer" formControlName="singer">
            </div>
        </div>

        <div class="form-row">
            <div class="form-group col-md-3">
            <label>Genre</label>
            <!--<input type="text" class="form-control" placeholder="Genre"> -->
            <select class="form-control" formControlName="genre">
                <option *ngFor="let g of Genres">{{g}}<option>
            </select>
            </div>
        </div>

        <button class="btn btn-ktunes" (click)="submitSong()"  > Submit </button>
        <!--[disabled]="songForm.invalid" -->
    </form>

</div>

<div>`
})

export class EditSongComponent {
    constructor(private _service: KTuneService, private _fb: FormBuilder,private _router: Router, private _ActivatedRoute: ActivatedRoute) {}
    @ViewChild('fileInput') fileRef: any;
    uploadedObj = {songname:"", singer:"", album: "",genre:"", songid:""};
    uploadedFiles = [];
    Genres;

    currentEditSong;
    songForm = this._fb.group({
        songname: ['', Validators.required], 
        singer: ['', Validators.required],
        album: ['', Validators.required],
        genre: ['', Validators.required],
    })

    loadFormData() {
        console.log(this.currentEditSong)
       //this.songForm.controls['songname'].setValue(this.currentEditSong.songname);
       this.songForm.controls['singer'].setValue(this.currentEditSong.singer);
       this.songForm.controls['album'].setValue(this.currentEditSong.album);
       this.songForm.controls['genre'].setValue(this.currentEditSong.genre);
    }
    

    ngOnInit() {
        this._service.getGenres().subscribe(res => {
            this.Genres = res;
        })

        this._service.getCurrentUser().subscribe(res => {
            alert(`LoggedIn as : ${JSON.stringify(res)} `);
        })

        this._ActivatedRoute.params.subscribe(p => {
            console.log(p);
            this._service.getSongFromID(p.id).subscribe(res => {
                this.currentEditSong = res[0];
                this.loadFormData()
            })
        })

        
    }

    upload(e) {
        const target= e.target as HTMLInputElement;
        const file: File = (target.files as FileList)[0];
        console.log(file);
        if(file.type == "audio/mpeg") {
            this.uploadedObj.songname = file.name.replace(/\..+$/, '');
            this.songForm.patchValue({songname: this.uploadedObj.songname  })
        } else {
            alert("Please upload an audio file");
            this.fileRef.nativeElement.value = '';
        }
        
    }

    submitSong() {
        console.log(this.songForm)
       if(this.songForm.status.toUpperCase() == "VALID") {
            this._service.editSong(this.currentEditSong.id,this.songForm.value).subscribe(res => {
                console.log(res);
                this._router.navigate(['/SongList'])
            })
        } else if(this.songForm.status.toUpperCase() == "INVALID" && this.songForm.touched){
            this._router.navigate(['/SongList'])
        }
    }

}