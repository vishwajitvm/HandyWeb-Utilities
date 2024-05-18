import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { firebaseConfig } from '../../firebaseConfig';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HandyWeb-Utilities';

  constructor() {
    initializeApp(firebaseConfig);
  }
  
}
