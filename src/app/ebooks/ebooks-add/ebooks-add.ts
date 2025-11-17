import { Component } from '@angular/core';
import { EbookService } from '../ebook-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ebooks-add',
  standalone: false,
  templateUrl: './ebooks-add.html',
  styleUrl: './ebooks-add.css',
})
export class EbooksAdd {
  constructor(private ebooksSrvc: EbookService, private router: Router) {}
  title = '';
  author = '';
  price = 0;
  ebooks: any;
  addEbook(f: NgForm) {
    this.ebooks = this.ebooksSrvc.getEbook()();
    const newEbook = {
      id: this.ebooksSrvc.getLastId() + 1,
      title: f.value.title,
      author: f.value.author,
      price: +f.value.price,
    };
    this.ebooksSrvc.addEbook(newEbook);
    this.router.navigate(['/ebooks']);
  }
}
