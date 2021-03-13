import { Component } from '@angular/core';
import { CardCarouselComponent } from './cardcarousel.component'

@Component({
    selector: 'song-list',
    template: `<div>
        <h3>Song List</h3>
        <div *ngFor="let v of views">
            <card-carousel [InnerCards]="InnerCards"></card-carousel>
        </div>
    </div>`
})

export class SongListComponent{
    views = [1,2,3]
    InnerCards = ["card1","card2","card3","card4","card5","card6","card70","card8"]
}