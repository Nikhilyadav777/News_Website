import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewasapiService {

constructor(private http:HttpClient) { }

newsApiurl = "https://newsapi.org/v2/top-headlines?country=in&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

techApi = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

sportApi = "https://newsapi.org/v2/top-headlines?country=in&category=sport&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

BusinessApi = "https://newsapi.org/v2/top-headlines?country=in&category=business&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

politicsApi = "https://newsapi.org/v2/top-headlines?country=in&category=politics&apikey=1c5e2237fcd342bf86e1cc62c9d23654";

healthApi = "https://newsapi.org/v2/top-headlines?country=in&category=health&apikey=1c5e2237fcd342bf86e1cc62c9d23654";


topHeading():Observable<any>
{
  return this.http.get(this.newsApiurl);
}

techNews():Observable<any>
{
  return this.http.get(this.techApi);
}

sportNews():Observable<any>
{
  return this.http.get(this.sportApi);
}

BusinessNews():Observable<any>
{
  return this.http.get(this.BusinessApi);
}

HealthNews():Observable<any>
{
  return this.http.get(this.healthApi);
}

PoliticsNews():Observable<any>
{
  return this.http.get(this.politicsApi);
}

}
