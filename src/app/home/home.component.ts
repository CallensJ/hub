import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListFriendComponent } from '../list-friend/list-friend.component';

@Component({
  selector: 'app-home',

  imports: [ListFriendComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
