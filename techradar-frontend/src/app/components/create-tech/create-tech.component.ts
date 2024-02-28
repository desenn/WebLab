import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';
import { Technology } from '../../technology';
import { RadarService } from '../../services/radar.service';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";
import {ActivatedRoute, Router, Routes} from "@angular/router";


@Component({
  selector: 'app-create-tech',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIf,
    FormsModule
  ],
  templateUrl: './create-tech.component.html',
  styleUrl: './create-tech.component.css'
})
export class CreateTechComponent {

  technology: Technology = {
    name: '',
    category: '',
    ring: '',
    descTech: '',
    descClass: '',
    published: false
  };
  submitted = false;
  error:string = '';

  constructor(private radarService: RadarService, private routes: Router) { }

  async save() {
    this.error = "";
    await this.radarService.create({
      name: this.technology.name,
      category: this.technology.category,
      ring: this.technology.ring,
      descTech: this.technology.descTech,
      descClass: this.technology.descClass,
      published: this.technology.published
    });
  }

}
