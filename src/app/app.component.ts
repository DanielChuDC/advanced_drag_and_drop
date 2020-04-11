import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advanced drag and drop';

  pageHorizontal: boolean;

  horizontal() {
    this.pageHorizontal = true;
    console.log('page Horizontal clicked');
  }
  vertical() {
    this.pageHorizontal = false;
    console.log('page verical clicked');
  }
}
