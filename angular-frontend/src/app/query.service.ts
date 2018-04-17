import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class QueryService {
  result$: Observable<any[]>;
  observer;


  constructor(private http: HttpClient) {
    this.result$ = new Observable((observer) => {
      this.observer = observer;
    })
  }


  makeQuery(queryData) {
    this.http.post('api/query', queryData, httpOptions).subscribe(
      data => {
        let data_array = <any[]>data;
        this.processData(data_array);
        this.observer.next(data_array);
      }
    );
  }

  private processData(data: any[]) {

  }


}
