import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnvBannerComponent } from './components/env-banner/env-banner';

@Component({
  imports: [RouterOutlet, EnvBannerComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('practica-despliegues');
}