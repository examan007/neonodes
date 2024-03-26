import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neonode',
  standalone: true,
  imports: [],
  templateUrl: './neonode.component.html',
  styleUrl: './neonode.component.css'
})
export class NeonodeComponent {
  @Input() node: any
}
