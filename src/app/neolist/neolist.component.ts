import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonodeComponent } from '../neonode/neonode.component';

@Component({
  selector: 'app-neolist',
  standalone: true,
  imports: [CommonModule, NeonodeComponent],
  templateUrl: './neolist.component.html',
  styleUrl: './neolist.component.css'
})
export class NeolistComponent {
    @Input() nodes: any [] = []
}