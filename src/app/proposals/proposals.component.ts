import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  @Input() profileText: string= '';
  @Input() profilePicture: string= '';


}
