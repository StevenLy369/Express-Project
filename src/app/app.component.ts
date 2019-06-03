import { Component } from '@angular/core';
import { ApiService} from './api.service';



@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'express-project';
  items: any;

  constructor(private apiService: ApiService) {
    this.apiService.getItems().subscribe(response => {
      this.items = response;
    });
  }

  addNewItem(newItemsId, newItemsName, newItemsPrice, newItemsQuanity) {
    this.apiService.addItems(newItemsId, newItemsName, newItemsPrice
      ,newItemsQuanity   ).subscribe(response => {
      this.items = response;
    });
  }

  deleteItem(product){
    this.apiService.deleteItem(product).subscribe(response => {
      this.items = response;
    })
  }

  updateItem(newProduct, oldProduct) {
    this.apiService.updateItem(newProduct, oldProduct).subscribe(response => {
      this.items = response;
    })
  }


}

