import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  courses: Array<string> = ['HTML', 'CSS', 'JS']
  animals: any[] = [
    {tipo: 'Perro', nombre: 'Lisa', edad: 10},
    {tipo: 'Gato', nombre: 'Pepon', edad: 2},
    {tipo: 'Pato', nombre: 'TanTan', edad: 7},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
