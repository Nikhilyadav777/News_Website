import { Component, OnInit } from '@angular/core';
import { NewasapiService } from '../service/newasapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private services:NewasapiService) { }

  techNewsDisplay:any = [];

  ngOnInit(): void {
    this.services.techNews().subscribe((result)=>{
      this.techNewsDisplay = result.articles;
    });
  }

}
