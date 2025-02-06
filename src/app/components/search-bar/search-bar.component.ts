import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
@Output() searchButtonClicked = new EventEmitter()

  searchClick(){
    // console.log('click');
    this.searchButtonClicked.emit();
  }
}
