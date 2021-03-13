import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SidebarComponent } from './sidebar.component';
import { CardCarouselComponent } from './cardcarousel.component';
import { RouterModule } from '@angular/router';
import { MainRoutes } from '../Routes/MasterRoutes'

@NgModule({
    imports: [CommonModule,
    RouterModule
    //RouterModule.forRoot(MainRoutes)
    ],   
    declarations: [SidebarComponent,CardCarouselComponent],
    exports: [SidebarComponent,CardCarouselComponent, RouterModule]
})

export class UtilitiesModule {}