import { Component } from '@angular/core';
import { FriendService } from './friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public fs: FriendService){}

  title = 'hamsterbook';

  postText= [
    'Hallo ich bin Tom und neu hier!',
    'Wie geht es dir?',
    'Schönes Wochenende',
    'Schönes Wochenende',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',


  ]

  postImage= [
    'assets/imgs/hamster/hamster1.jpg',
    'assets/imgs/hamster/hamster2.jpg',
    'assets/imgs/hamster/hamster3.jpg',
    'assets/imgs/hamster/hamster4.jpg',
    'assets/imgs/hamster/hamster5.jpg',
    'assets/imgs/hamster/hamster6.jpg',
    'assets/imgs/hamster/hamster7.jpg',
    'assets/imgs/hamster/hamster8.jpg',

  ]



  getArrayLength(): number[] {
    const maxLength = Math.max(this.postImage.length, this.postText.length);
    return Array.from({ length: maxLength }, (_, i) => i);
  }

  getArrayFriends(): number[] {
    const maxLength = Math.max(this.fs.names.length, this.fs.imgs.length);
    return Array.from({ length: maxLength }, (_, i) => i);
  }

  getArraynewFriends(): number[] {
    const maxLength = Math.max(this.fs.newnames.length, this.fs.newimgs.length);
    return Array.from({ length: maxLength }, (_, i) => i);
  }
}
