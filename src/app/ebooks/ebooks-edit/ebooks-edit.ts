import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EbookService } from '../ebook-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-ebooks-edit',
  standalone: false,
  templateUrl: './ebooks-edit.html',
  styleUrl: './ebooks-edit.css',
})
export class EbooksEdit {
  title = '';
  author = '';
  price = 0;
  ebook: any;
  constructor(
    private ebookSrvc: EbookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.ebook = this.ebookSrvc.getEbook_edit(+id!);
    this.title = this.ebook.title;
    this.author = this.ebook.author;
    this.price = this.ebook.price;
  }
  envoyer() {
    this.ebook.title = this.title;
    this.ebook.author = this.author;
    this.ebook.price = this.price;
    this.ebookSrvc.edit(this.ebook);
    this.router.navigate(['ebooks']);
  }
}
