import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstangular';
  showTitle = false;

  toggleShowTitle(): void {
    this.showTitle = !this.showTitle;
  }
}


