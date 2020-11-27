import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { IfDemoComponent } from './if-demo/if-demo.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { LinechartComponent } from './linechart/linechart.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TwowaybindingComponent,
    IfDemoComponent,
    CartStatusComponent,
    LinechartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap:    [ IfDemoComponent ]
})
export class AppModule { }
