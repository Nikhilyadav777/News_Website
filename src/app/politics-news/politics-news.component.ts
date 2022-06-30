import { Component, OnInit } from '@angular/core';
import { NewasapiService } from '../service/newasapi.service';

@Component({
  selector: 'app-politics-news',
  templateUrl: './politics-news.component.html',
  styleUrls: ['./politics-news.component.css']
})
export class PoliticsNewsComponent implements OnInit {

  constructor(private services:NewasapiService) { }

  PoliticsNews:any = [];

  ngOnInit(): void {
    this.services.PoliticsNews().subscribe((res)=>{
      this.PoliticsNews = res.articles;
    })
  }

}
