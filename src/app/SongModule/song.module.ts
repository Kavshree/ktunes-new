import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { songRoutes } from '../Routes/song.route';
import { CardCarouselComponent } from '../UtilitiesModule/cardcarousel.component';
import { UtilitiesModule } from '../UtilitiesModule/utilities.module';

@NgModule({
    imports: [CommonModule, UtilitiesModule, RouterModule.forChild(songRoutes) ],
    declarations: [],
    exports: []
})

export class SongModule {}