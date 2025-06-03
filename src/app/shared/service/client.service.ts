import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  BASE_URL: string = environment.Base_url;
  POST_URL: string = `${this.BASE_URL}/posts.json`;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _activatedroute: ActivatedRoute
  ) {}

  fetchAllPost(): Observable<any> {
    return this._http.get<any>(this.POST_URL).pipe(
      map((data: any) => {
        let postArr = [];
        for (const key in data) {
          postArr.push({ ...data[key], id: key });
        }

        return postArr;
      })
    );
  }

  createPost(post: any): Observable<any> {
    return this._http.post<any>(this.POST_URL, post);
  }

  getSinglepost(id: string): Observable<any> {
    return this._http.get(`${this.BASE_URL}/posts/${id}.json`);
  }

  updatedobj(data: any): Observable<any> {
    const UpdateURL = `${this.BASE_URL}/posts/${data.id}.json`;

    return this._http.patch(UpdateURL, data);
  }

  removedata(id: string): Observable<any> {
    let removerURL = `${this.BASE_URL}/posts/${id}.json`;
    return this._http.delete(removerURL);
  }
}
