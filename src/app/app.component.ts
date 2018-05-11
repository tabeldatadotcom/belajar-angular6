import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ini komentar
  title: string = 'Aplikasi Perpustakaan';
  books: Book[] = [
    new Book('Java', 2017),
    new Book('PHP', 2017),
    new Book('Javascript', 2017),
    new Book('Ruby', 2017),
    new Book('Phyton', 2017),
    new Book('C#', 2017),
    new Book('cpp', 2017),
  ];

  book: Book = new Book();

  kirimData(data){
    console.log(this.book);
    if(this.book.name && this.book.tahunTerbit){
      this.books.push(this.book);
    }
    this.book = new Book();
  }

}

export class Book{
  constructor(public name?: string, public tahunTerbit?: number){}
}
