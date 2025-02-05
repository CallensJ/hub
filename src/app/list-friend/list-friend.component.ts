import { Component } from '@angular/core';
import { OneFriendComponent } from '../one-friend/one-friend.component';
import { User } from '../models/user.model';

@Component({
  selector: 'app-list-friend',
  imports: [OneFriendComponent],
  templateUrl: './list-friend.component.html',
  styleUrl: './list-friend.component.css'
})
export class ListFriendComponent {
user1! : User;

constructor() {
  this.user1 = new User();
  this.user1.name = "Jean Dujardin";
  this.user1.avatar = "";
  this.user1.location = "France";
  this.user1.age = 40;
  this.user1.hobbies = "🎨 Peinture, 🎸 Musique, 📚 Lecture";
  this.user1.description = "super peintre super musicien et super orateur encore meilleur que je sais pas"
}
}
