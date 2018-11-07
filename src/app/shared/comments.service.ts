import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Comment } from "./comment.model";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
  })
};

@Injectable()
export class CommentsService {
  private _baseUrl = "http://localhost:3000/comment";

  constructor(private http: HttpClient) {}

  getall(location) {
    console.log('location in getAll:',location);
    return this.http.get<any>(`${this._baseUrl}/${location}/getall`, httpOptions);
  }

  create(comment: Comment) {
    return this.http.post<any>(
      `${this._baseUrl}/${comment.username}/${comment.location}/create`,
      comment,
      httpOptions
    );
  }

  delete(comment: Comment) {
    return this.http.delete<any>(
      `${this._baseUrl}/${comment.id}/delete`,
      httpOptions
    );
  }
}
