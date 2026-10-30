import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-env-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './env-banner.html',
  styleUrls: ['./env-banner.css']
})
export class EnvBannerComponent {
  appName = 'Práctica Despliegues - Release Manager';
  welcomeMessage = '¡Bienvenido al sistema de gestión de entornos!';
  
  // Cambia esto según la rama: 'production', 'qa' o 'uat'
  currentEnv: 'production' | 'qa' | 'uat' = 'uat';
}