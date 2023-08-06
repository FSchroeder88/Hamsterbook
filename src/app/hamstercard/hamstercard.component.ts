import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamstercard',
  templateUrl: './hamstercard.component.html',
  styleUrls: ['./hamstercard.component.scss']
})
export class HamstercardComponent {

  @Input() text: string= '';
  @Input() image: string= '';

}
