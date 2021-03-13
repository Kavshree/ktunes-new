import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component' ;
import { PageNotFoundComponent } from './pageNotFound.component'

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, PageNotFoundComponent],
    exports: [AboutComponent, PageNotFoundComponent]
})

export class AboutModule {}