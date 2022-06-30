import { Component, OnInit } from '@angular/core';
import { NewasapiService } from '../service/newasapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  topHeading:any=[];
  constructor(private service:NewasapiService) { }

  ngOnInit(): void {

  this.service.topHeading().subscribe((result)=>{
     console.log(result);
     this.topHeading = result.articles;
  })

  }

}
