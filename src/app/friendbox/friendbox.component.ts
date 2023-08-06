import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-friendbox',
  templateUrl: './friendbox.component.html',
  styleUrls: ['./friendbox.component.scss']
})
export class FriendboxComponent {

  @Input() profileText: string= '';
  @Input() profilePicture: string= '';
}
