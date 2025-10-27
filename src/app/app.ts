import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('uasd_pensum');
}
