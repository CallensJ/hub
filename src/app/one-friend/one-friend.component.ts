import { Component, input, Input, InputSignal } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css',
})
export class OneFriendComponent {
// @Input({
//   // required : true
//   // alias : "my-user"
// }) 
// user: User = new User()

user : InputSignal<User> = input(new User()); 

}
