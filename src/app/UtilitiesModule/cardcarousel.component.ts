import { Component } from '@angular/core';

@Component({
    selector: 'card-carousel',
    template:  `<div class="row flex-nowrap outer">
    <div class="col-3">
        <div class="card card-block">Card</div>
    </div>
    <div class="col-3">
        <div class="card card-block">Card</div>
    </div>
    <div class="col-3">
        <div class="card card-block">Card</div>
    </div>
    <div class="col-3">
        <div class="card card-block">Card</div>
    </div>
    </div>`,
    styles: [`
    .card-block {
        min-height: 300px;
    }
    .outer {
        overflow-x: hidden;
        overflow-y: hidden;
      }
        #left-btn, #right-btn{padding:5px;cursor:pointer}
    `]
})

export class CardCarouselComponent {}