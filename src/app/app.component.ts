import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;
  answer = 42;
  isLoggedIn =true;
  isBordered = true;
blue = 'blue'
  tamanoCheck = false;
  colorCheck = false;
 username:string;

   animals = [{
      id: 1,
      category: 'mammal',
      name: 'Dog'
  },{
      id: 2,
      category: 'oviparous',
      name: 'Duck'
  },{
      id: 3,
      category: 'mammal',
      name: 'Elephant'
  },{
      id: 4,
      category: 'reptile',
      name: 'Snake'
  }];

texto: string;

  hacerMayusculas() {
    this.texto = this.texto.toUpperCase();
  }

  hacerMinusculas() {
    this.texto = this.texto.toLowerCase();
  }
}
