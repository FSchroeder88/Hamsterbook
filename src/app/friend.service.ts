import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = ['Sven', 'Lars', 'Theo', 'Hans'];
  imgs = ['assets/imgs/hamster/hamster3.jpg',
  'assets/imgs/hamster/hamster4.jpg',
  'assets/imgs/hamster/hamster5.jpg',
  'assets/imgs/hamster/hamster6.jpg'];

  newnames = ['Martin'];
  newimgs = ['assets/imgs/hamster/hamster3.jpg'];

  constructor() { }

addFriend(profileText:string, profilePicture:string){
  this.newnames.push(profileText);
  this.newimgs.push(profilePicture);
}

}
