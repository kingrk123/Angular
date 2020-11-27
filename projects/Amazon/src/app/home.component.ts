import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <h2>{{title}}</h2>
    <p>Welcome to Angular-9</p>
    `,
    styles: ['h2{color:blue; text-align:center}', 'p{text-align:center}']
})
export class HomeComponent{
    public title = 'Amazon Shopping';
}