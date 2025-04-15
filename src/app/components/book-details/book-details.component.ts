import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html'
})
export class BookDetailsComponent implements OnInit {
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

  back(): void {
    this.router.navigate(['/books']);
  }
}
