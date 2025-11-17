import { Injectable, signal } from '@angular/core';
import { Ebook } from './ebook';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  ebookSrvc: any;
  private ebooks = signal<Ebook[]>([
    { id: 1, title: 'Atomic Habits', author: 'James Clear', price: 30 },
    { id: 2, title: 'The slight edge', author: 'Jeff Olsen', price: 25 },
  ]);
  getEbook() {
    return this.ebooks;
  }
  addEbook(newEbook: any) {
    this.ebooks.set([...this.ebooks(), newEbook]);
  }
  getEbook_edit(id: number): Ebook | undefined {
    return this.ebooks().find((e) => e.id === id);
  }
  edit(ebook: any) {
    this.ebooks.set(
      this.ebooks().map((e) => {
        return e.id == ebook.id ? ebook : e;
      })
    );
  }
  deleteEbook(id: number) {
    this.ebooks.update((list) =>
      list.filter((e) => {
        return e.id != id;
      })
    );
  }
  getLastId() {
    return this.ebooks()[this.ebooks().length - 1].id;
  }
}
