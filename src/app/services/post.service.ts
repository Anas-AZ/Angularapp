import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from "../Models/Post"

const httpOptions = {
  headers : new HttpHeaders({'colntent-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post : Post): Observable<Post>{
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

}
