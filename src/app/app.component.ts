import { Component } from '@angular/core';
import { SidebarComponent } from './UtilitiesModule/sidebar.component';
import { KTuneService} from'./ktune.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _service: KTuneService) {}
  ngOnInit() {
    this._service.getCurrentUser().subscribe(resp => {
      let currUserResp = resp[0];
      if(currUserResp?.id) {
        this._service.deleteCurrentUser(currUserResp?.id).subscribe(resp => {
          console.log("Current user cleared")
        })
      }
    })
  }
  title = 'kTunes';
  public isMenuCollapsed = true;
  navbarOpen = false;
  toggleMenu() {
    this.navbarOpen = !this.navbarOpen;
  }
}
