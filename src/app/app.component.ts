import { Component } from '@angular/core';
import { SidebarComponent } from './UtilitiesModule/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kTunes';
  public isMenuCollapsed = true;
  navbarOpen = false;
  toggleMenu() {
    this.navbarOpen = !this.navbarOpen;
  }
}
