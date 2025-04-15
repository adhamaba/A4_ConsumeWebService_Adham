import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html'
})
export class DeleteBookComponent implements OnInit {
  book: Book | undefined;

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

  deleteBook(): void {
    if (this.book?.id) {
      this.bookService.delete(this.book.id).subscribe(() => {
        this.router.navigate(['/books']);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/books']);
  }
}
