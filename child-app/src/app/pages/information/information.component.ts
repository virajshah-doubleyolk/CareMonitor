import { Component, HostListener, OnInit } from '@angular/core';
import { InformationModel } from './model/information.model';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  informationDetails =  new InformationModel();
  @HostListener('window:message', ['$event'])

  onMessage(e: MessageEvent) {
    if (e.origin == "http://localhost:4200") {
      this.informationDetails = e.data;
     
    }
    
  }

  constructor() { }


  ngOnInit(): void {
  }

}
