import { Component, OnInit } from '@angular/core';
import { Todo } from '../../common/todo';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1 , 'Learn To Dance', false, new Date()),
    new Todo(2 , 'Angular', false, new Date()),
    new Todo(3 , 'Java', false, new Date()),
    // {id : 1, description : 'Lern To Dance'},
    // {id : 2, description : 'Angular'},
    // {id : 3, description : 'Java'},
  ]

  // todo = {
  //   id : 1,
  //   description : 'Lern To Dance'
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
