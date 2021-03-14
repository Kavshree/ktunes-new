import { Component, ElementRef, ViewChild } from '@angular/core';
import  { KTuneService } from '../ktune.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector:  'add-song',
    template: `<div class="row">
       <hr class="ktunesLine" />
       <div class="col-lg-12">
       <h3> Add song </h3>
           
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

        <button class="btn btn-ktunes" (click)="submitSong()"> Submit </button>
    </form>

</div>

<div>`
})

export class AddSongComponent {
    constructor(private _service: KTuneService, private _fb: FormBuilder,private _router: Router) {}
    @ViewChild('fileInput') fileRef: any;
    uploadedObj = {songname:"", singer:"", album: "",genre:""};
    uploadedFiles = [];
    Genres;
    
    songForm  = this._fb.group({
        songname: ['', Validators.required], 
        singer: ['', Validators.required],
        album: ['', Validators.required],
        genre: ['', Validators.required],
    })

    ngOnInit() {
        this._service.getGenres().subscribe(res => {
            this.Genres = res;
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
        alert(this.songForm.status);
        console.log(this.songForm.value);
        if(this.songForm.status.toUpperCase() == "VALID") {
            this._service.postSong(this.songForm.value).subscribe(res => {
                console.log(res);
                this._router.navigate(['/SongList'])
            })
        }
    }
}