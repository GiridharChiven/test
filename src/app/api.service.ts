import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createEntry(data) {
    return this.http.post('http://localhost:3000/users/update', data);
  }

  getAllUsers() {
    return this.http.get('http://localhost:3000/users/');
  }

  getUserById(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }
  createEntry1(data) {
    return this.http.post('http://localhost:3000/users/update', data);
  }

}
