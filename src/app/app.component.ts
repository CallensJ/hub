import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListFriendComponent } from './list-friend/list-friend.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, ListFriendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = '01-hub';
}
