import { Component, OnInit } from '@angular/core';
import { BookService, Book } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
    });
  }

  goToEdit(id: number) {
    this.router.navigate(['/edit-book', id]);
  }

  goToDelete(id: number) {
    this.router.navigate(['/delete-book', id]);
  }

  goToDetails(id: number) {
    this.router.navigate(['/book-details', id]);
  }
}
