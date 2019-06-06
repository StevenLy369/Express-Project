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
  shouldBeHidden: boolean = true;
  

  constructor(private apiService: ApiService) {
    this.apiService.getItems().subscribe(response => {
      this.items = response;
    });
  }
  


  toggleForm(index) {
    this.items[index].beingUpdated = !this.items[index].beingUpdated;
    console.log(this.items[index]);
    
  }
 
  addNewItem(form) {
    this.apiService.addItems({
      ...form.value,
      product: form.value.product === ""? false: form.value.product,
      price: form.value.price ===""? false: form.value.price,
      quantity: form.value.quantity ===""? false: form.value.quantity
    }).subscribe(response => {
      this.items = response;
    });
  }

  deleteAnItem(id){
    this.apiService.deleteItem(id).subscribe(response => {
      this.items = response;
    });
    // console.log(id);
  }

  updateAnItem(item) {
    this.apiService.updateItem(item).subscribe(response => {
      this.items = response;
    })
  }


}

