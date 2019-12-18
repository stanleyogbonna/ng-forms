import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-forms';
  heroInfo() {
    const newHero = new Hero(34, 'abc', 'def');
    console.log(newHero)
  }
}
