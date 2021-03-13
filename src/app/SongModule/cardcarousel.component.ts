import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'card-carousel',
    template:  `
    <div class="d-flex justify-content-end">
        <span id="left-btn" (click)="leftBtnClick($event)" #leftBtnRef><i class="fa fa-lg fa-chevron-left"></i></span>
        <span id="right-btn" (click)="rightBtnClick($event)" #RightBtnRef><i class="fa fa-lg fa-chevron-right"></i></span>
    </div>

    <div class="row flex-nowrap outer" id="card-content" #contentRef>
            <div class="col-3" *ngFor="let i of InnerCards">
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
        #left-btn, #right-btn{padding:5px;cursor:pointer;color: #00bc8c;}
    `]
})

export class CardCarouselComponent {
    @Input() InnerCards = [];
    content: HTMLElement;
    @ViewChild('contentRef') contentRef: ElementRef;
    ngAfterViewInit() {
        this.content = this.contentRef.nativeElement as HTMLElement;
    }
    scrollStep = 200;
    rightBtnClick(e) {
        e.preventDefault();
        let sl = this.content.scrollLeft,
        cw = this.content.scrollWidth;
        if ((sl + this.scrollStep) >= cw) {
            this.content.scrollTo(cw, 0);
        } else {
            this.content.scrollTo((sl + this.scrollStep), 0);
        }
    };

    leftBtnClick(e) {
        e.preventDefault();
        let sl = this.content.scrollLeft;
            
        if ((sl - this.scrollStep) <= 0) {
            this.content.scrollTo(0, 0);
        } else {
            this.content.scrollTo((sl - this.scrollStep), 0);
        }
    };
    
}