import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './playList.component';
import { UtilitiesModule } from '../UtilitiesModule/utilities.module';
import { CardCarouselComponent } from './cardcarousel.component';
import { playlistRoutes } from '../Routes/playlist.route';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPlaylistComponent } from './addPlaylist.component'; 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
    imports: [CommonModule, NgbModule, NgMultiSelectDropDownModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(playlistRoutes)],
    declarations: [CardCarouselComponent, PlayListComponent, AddPlaylistComponent],
    exports: []
})

export class PlayListModule {}