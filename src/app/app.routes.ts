import { Routes } from '@angular/router';

import { BookListComponent } from './components/book-list/book-list.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { FindBookComponent } from './components/find-book/find-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'delete-book/:id', component: DeleteBookComponent },
  { path: 'find-book', component: FindBookComponent },
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];
