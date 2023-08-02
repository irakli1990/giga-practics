import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/attrs/post';

@Injectable()
export class UserService {
  baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + '/posts');
  }
}
