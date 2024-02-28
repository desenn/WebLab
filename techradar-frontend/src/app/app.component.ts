import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {CreateTechComponent} from "./components/create-tech/create-tech.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            RouterLink,
            RouterLinkActive,
            CommonModule,
            CreateTechComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techradar-frontend';
}
