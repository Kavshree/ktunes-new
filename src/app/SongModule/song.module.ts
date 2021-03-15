import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { songRoutes } from '../Routes/song.route';
import { FormsModule } from '@angular/forms';

import { UtilitiesModule } from '../UtilitiesModule/utilities.module';
import { SongListComponent } from './songlist.component';
import { AddSongComponent } from './addSong.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(songRoutes),NgbModule ],
    declarations: [ SongListComponent, AddSongComponent],
    exports: []
})

export class SongModule {}