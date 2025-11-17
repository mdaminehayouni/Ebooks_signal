import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebooks-list',
  standalone: false,
  templateUrl: './ebooks-list.html',
  styleUrl: './ebooks-list.css',
})
export class EbooksList implements OnInit {
  ebooks!: any;

  constructor(private ebookSrvc: EbookService, private router: Router) {}

  ngOnInit(): void {
    this.ebooks = this.ebookSrvc.getEbook();
  }
  delete(id: number) {
    this.ebookSrvc.deleteEbook(id);
  }
}
