
import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar',
    template:  `<div id="sidebar-wrapper">
    <div class="sidebar-heading text-center"><a href="#"><i class="fa fa-music" aria-hidden="true"></i> </a> kTunes</div>
    <div class="list-group list-group-flush">
      <a [routerLink]="['/About']" class="list-group-item list-group-item-action"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
      <a [routerLink]="['/SongList']" class="list-group-item list-group-item-action"><i class="fa fa-globe" aria-hidden="true"></i> Songs</a>
      <a [routerLink]="['/playList']" class="list-group-item list-group-item-action"><i class="fa fa fa-heart-o" aria-hidden="true"></i> My Playlists</a>
      <a href="#" class="list-group-item list-group-item-action"><i class="fa fa-book" aria-hidden="true"></i> Albums</a>
      <a [routerLink]="['/playList/addPlaylist']" class="list-group-item list-group-item-action"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Playlist</a>
      <a href="#" class="list-group-item list-group-item-action">Status</a>
    </div>
  </div>`,
  styles: [`
    #sidebar-wrapper .list-group-item {background-color: transparent;border:none;border-left:5px solid transparent;}
    #sidebar-wrapper .list-group-item:hover{border-left:5px solid #00bc8c;}
  `]
})

export class SidebarComponent {
   // @Input() status;
}