import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  name = ['Sven', 'Lars', 'Theo', 'Hans'];
  imgs = ['assets/imgs/hamster/hamster3.jpg',
  'assets/imgs/hamster/hamster4.jpg',
  'assets/imgs/hamster/hamster5.jpg',
  'assets/imgs/hamster/hamster6.jpg'];

  getArrayLength(): number[] {
    const maxLength = Math.max(this.postImage.length, this.postText.length);
    return Array.from({ length: maxLength }, (_, i) => i);
  }

  getArrayFriends(): number[] {
    const maxLength = Math.max(this.name.length, this.imgs.length);
    return Array.from({ length: maxLength }, (_, i) => i);
  }
}
