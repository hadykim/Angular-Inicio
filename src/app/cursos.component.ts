import {Component} from '@angular/core';

@Component({
    selector: 'cursos',
    template: `
    <h1>Mis cursos</h1>
    <p>TypeScript</p>
    <img [src] = "imagenURL"/> <br/>
    <button [class.activo]="isActive"> Mi boton </button>
    `,
    styles:[`
    h1{color: red}
    .activo{
        background: green;
    }
    `]
})

export class CursosComponent {
    imagenURL = "http://lorempixel.com/400/200";
    isActive = true;
}