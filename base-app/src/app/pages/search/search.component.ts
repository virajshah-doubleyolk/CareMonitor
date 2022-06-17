import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchData: string | undefined;
  doc: Window | any;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  onLoad(iframe: HTMLIFrameElement) {
    this.doc = iframe.contentDocument || iframe.contentWindow;

  }

  onSearch(event: string | undefined) {
    this.searchService.getDataByTitle(event).subscribe(res => {
      this.doc.postMessage(res, 'http://localhost:4201');
    });
  }

  onChange(event: any): void {
    const data = (event.target as HTMLInputElement).value;
    this.searchService.getDataByTitle(data).subscribe(res => {
      this.doc.postMessage(res, 'http://localhost:4201');
    });
  }

}
