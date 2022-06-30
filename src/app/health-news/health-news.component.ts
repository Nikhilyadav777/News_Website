import { Component, OnInit } from '@angular/core';
import { NewasapiService } from '../service/newasapi.service';
@Component({
  selector: 'app-health-news',
  templateUrl: './health-news.component.html',
  styleUrls: ['./health-news.component.css']
})
export class HealthNewsComponent implements OnInit {

  constructor(private services:NewasapiService) { }

  HealthNewsDisplay:any = [];
  ngOnInit(): void {
    this.services.HealthNews().subscribe((res)=>{
      this.HealthNewsDisplay=res.articles;
    })
  }

}
