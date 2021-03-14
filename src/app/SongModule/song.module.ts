import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { songRoutes } from '../Routes/song.route';
import { CardCarouselComponent } from './cardcarousel.component';
import { UtilitiesModule } from '../UtilitiesModule/utilities.module';
import { SongListComponent } from './songlist.component';
import { AddSongComponent } from './addSong.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(songRoutes),NgbModule ],
    declarations: [CardCarouselComponent, SongListComponent, AddSongComponent],
    exports: []
})

export class SongModule {}