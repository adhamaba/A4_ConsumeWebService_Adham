import { Component } from '@angular/core';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html'
})
export class FindBookComponent {
  searchTitle = '';
  results: Book[] = [];
  message = '';

  constructor(private bookService: BookService) {}

  search(): void {
    if (this.searchTitle.trim()) {
      this.bookService.findByTitle(this.searchTitle.trim()).subscribe(data => {
        this.results = data;
        this.message = data.length > 0 ? '' : 'No books found.';
      });
    } else {
      this.results = [];
      this.message = 'Please enter a title to search.';
    }
  }
}
