import { Component, OnInit } from '@angular/core';
import { NewasapiService } from '../service/newasapi.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styles: [
  ]
})
export class SportNewsComponent implements OnInit {

  constructor(private services:NewasapiService) { }

  sportNewsDisplay:any = [];

  ngOnInit(): void {
    this.services.sportNews().subscribe((res)=>{
      this.sportNewsDisplay = res.articles;
    })
  }

}
