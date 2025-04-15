import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent implements OnInit {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getById(id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(): void {
    if (this.book.id) {
      this.bookService.update(this.book.id, this.book).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }
}
