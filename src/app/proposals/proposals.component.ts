import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent {

  @Input() profileText: string= '';
  @Input() profilePicture: string= '';

  constructor(public fs: FriendService){}

}
