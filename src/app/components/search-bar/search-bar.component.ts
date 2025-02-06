import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

@Input() search = 'initial';
@Output() searchChange = new EventEmitter<string>();
@Output() searchButtonClicked = new EventEmitter();

  searchClick(){
    // console.log('click');
    this.searchButtonClicked.emit();
  }
  updateSearch(value: string){
    this.searchChange.emit(value);
  }
}
