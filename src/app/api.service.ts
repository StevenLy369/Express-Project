import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // private url = 'http://localhost:3000/api/cart-items'

  // public getAllItems(): Observable<any> {
  //   return this.http.get(this.url);
  // }



  getItems() {
    return this.http.get("/api/cartitems", { responseType : "json"});

  }

  addItems(newItemsId, newItemsName, newItemsPrice, newItemsQuanity) {
    return this.http.post("/api/animals", 
    { id: newItemsId, product: newItemsName, price: newItemsPrice, quanity: newItemsQuanity  },
    {responseType: "json"});
  }

  deleteItem(product){
    return this.http.delete(`/api/items/${product}`, { responseType: "json"});
  }

  updateItem( newProduct, oldProduct){
      return this.http.put(`/api/items/${oldProduct}`, { name: newProduct}, { responseType: "json"});
    }

}
