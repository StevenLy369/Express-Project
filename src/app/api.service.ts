import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  



  getItems() {
    return this.http.get("/api/cart-items", { responseType : "json"});

  }
  //can make it in one ngForm.
  addItems(newItem) {
    return this.http.post("/api/cart-items", newItem, {responseType: "json"});
  }

  deleteItem(id){
    console.log(id);
    return this.http.delete(`/api/cart-items/${id}`, { responseType: "json"});
    
  }

  updateItem(item){
      return this.http.put(`/api/cart-items/${item.id}`, item , { responseType: "json"});
    }

}
