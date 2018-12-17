import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBeverage } from 'src/interfaces/beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageServiceService {
  private beveragesUrl: string = "/assets/data/beverages.json";
  constructor(private http: HttpClient) { }

  getBeverages(): Observable<IBeverage[]>{
    return this.http.get<IBeverage[]>(this.beveragesUrl);
  }

}
