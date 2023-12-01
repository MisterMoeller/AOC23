import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getDataOfDay(day: string, part: 1 | 2) {
    return this.httpClient.get(`assets/Day${day}/data_${day}_part_${part}_real.txt`, {responseType: 'text'});
  }

  getTestDataOfDay(day: string, part: 1 | 2) {
    return this.httpClient.get(`assets/Day${day}/data_${day}_part_${part}_test.txt`, {responseType: 'text'});
  }
}
