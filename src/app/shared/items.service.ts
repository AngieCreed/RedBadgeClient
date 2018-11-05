import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Item } from "./item.model";
// import { EmailValidator } from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token")
  })
};

@Injectable()
export class ItemsService {
  private _baseUrl = "http://localhost:3000/item";

  constructor(private http: HttpClient) {}

  getall(id) {
    console.log("hi");
    return this.http.get<any>(`${this._baseUrl}/${id}/getall`, httpOptions);
  }

  create(item: Item) {
    console.log(item.userId);
    return this.http.post<any>(
      `${this._baseUrl}/${item.userId}/create`,
      item,
      httpOptions
    );
  }

  update(item: Item) {
    return this.http.put<any>(
      `${this._baseUrl}/${item.id}/update`,
      item,
      httpOptions
    );
  }

  delete(item: Item) {
    return this.http.delete<any>(
      `${this._baseUrl}/${item.id}/delete`,
      httpOptions
    );
  }
}
