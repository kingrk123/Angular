import { Component} from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent  {
  public Name = '';
  public Price = 0.0;
  public ShippedTo = '';
  public InStock = false;
  public product = {
    Name: '',
    Price: 0,
    ShippedTo: '',
    InStock: false
  };
  public RegisterClick(){
    this.product = {
    Name: this.Name,
    Price: this.Price,
    ShippedTo: this.ShippedTo,
    InStock: this.InStock
};
}
}



