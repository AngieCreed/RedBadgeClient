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

  getall() {
    console.log("hi");
    return this.http.get<any>(`${this._baseUrl}/redbadge/getall`, httpOptions);
  }

  create(comment: Comment) {
    return this.http.post<any>(
      `${this._baseUrl}/${comment.username}/create`,
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
