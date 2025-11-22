import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import shop component

import { Shop } from './shop/shop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-first-shop');
}
