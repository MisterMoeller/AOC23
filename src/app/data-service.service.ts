import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getDataOfDay(day: string): Observable<string> {
    return this.httpClient.get(`assets/Day${day}/data_day_${day}.txt`, {responseType: 'text'});
  }

  getTestDataOfDay(day: string, part: 1 | 2): Observable<string> {
    return this.httpClient.get(`assets/Day${day}/data_day_${day}_part_${part}_test.txt`, {responseType: 'text'});
  }
}
