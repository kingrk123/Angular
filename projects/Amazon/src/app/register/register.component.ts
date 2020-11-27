import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  public product = {
    Name: 'Samsung TV',
    Price: 45000.55,
    InStock: false
    };


}
