import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createStudent(data: any) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(URL, data, {
      headers: httpHeaders,
      observe: 'response',
    });
  }

  updateStudent(data: any) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(URL, data, {
      headers: httpHeaders,
    });
  }

  deleteStudent(data: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };

    return this.http.delete(URL, options);
  }
}
