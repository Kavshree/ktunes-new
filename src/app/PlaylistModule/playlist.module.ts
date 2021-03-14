import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayListComponent } from './playList.component';
import { UtilitiesModule } from '../UtilitiesModule/utilities.module';
import { CardCarouselComponent } from './cardcarousel.component';
import { playlistRoutes } from '../Routes/playlist.route';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(playlistRoutes)],
    declarations: [CardCarouselComponent, PlayListComponent],
    exports: []
})

export class PlayListModule {}