import { Component, OnInit } from '@angular/core';
import { NewasapiService } from '../service/newasapi.service';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styles: [
  ]
})
export class BusinessNewsComponent implements OnInit {

  constructor(private services:NewasapiService) { }

  BusinessNewsDisplay:any = [];

  ngOnInit(): void {
    this.services.BusinessNews().subscribe((res)=>{
      this.BusinessNewsDisplay = res.articles;
    })
  }

}
