import { Component} from '@angular/core';

@Component({
  selector: 'app-if-demo',
  templateUrl: './if-demo.component.html',
  styleUrls: ['./if-demo.component.css']
})
export class IfDemoComponent  {
  public product = {
      Name : 'Hitachi',
      price : 45000.00,
      photo : 'assets/hitachi.jpeg',
  };
  public showImage = false;
  public btnText = 'Show';
  public TogglePreview() {
    this.showImage = (this.showImage==false) ? true : false;
    this.btnText = (this.btnText=='Show') ? 'Hide' : 'Show';
}
}



