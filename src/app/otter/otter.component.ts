import { Component, Input } from '@angular/core';
import { Pet } from '../../data/pets';

@Component({
  selector: 'app-otter',
  standalone: true,
  imports: [],
  templateUrl: './otter.component.html',
  styleUrl: './otter.component.css',
})
export class OtterComponent {
  @Input() pet!: Pet;
}
