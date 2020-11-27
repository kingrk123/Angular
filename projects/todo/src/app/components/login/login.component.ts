import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'rk';
  password = '';
  errormssg = 'Invalid Credential';
  invalidLogin = false;

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService ) { }

  ngOnInit(): void {
  }

  handlelogin() {
    //console.log('Login Successfull ' + this.username);
    //if (this.username === "rk" && this.password === "dummy") {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(['welcome' , this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
