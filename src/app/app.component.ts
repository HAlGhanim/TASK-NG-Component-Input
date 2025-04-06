import { Component } from '@angular/core';
import { pets } from '../data/pets';
import { PetComponent } from './pet/pet.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PetComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TASK-NG-Passing-Data';
  pets = pets;
}
