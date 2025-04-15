import { Component } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  
  
})
export class AddBookComponent {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 0
  };

  message = '';

  constructor(private bookService: BookService, private router: Router) {}

  addBook() {
    if (this.book.title && this.book.authorName) {
      this.bookService.create(this.book).subscribe(() => {
        this.message = 'Book added successfully!';
        this.router.navigate(['/books']);
      });
    } else {
      this.message = 'Please fill in all required fields.';
    }
  }
}
