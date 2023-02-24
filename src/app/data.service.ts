import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:3500/students';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get(URL).pipe(
      map((response) => {
        return {
          students: response,
        };
      })
    );
  }

  getOneStudent(id: string | null) {
    return this.http.get(`${URL}/${id}`).pipe(
      map((response) => {
        return {
          student: response,
        };
      })
    );
  }
}
