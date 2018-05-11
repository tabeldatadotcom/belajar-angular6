import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ini komentar
  title: string = 'Aplikasi Perpustakaan';
  books: string[] = ['Java', 'PHP', 'Javascript', 'Ruby', 'Swift', 'Phyton', 'Scala'];

  book: Book = new Book();

  kirimData(data){
    console.log(this.book);
  }

}

export class Book{
  public name: string;
}
