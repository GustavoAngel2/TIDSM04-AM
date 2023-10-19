import { Component } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  matricula: number;
  Curp: string;
  numcel: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricula: 1, nombre: 'Hydrogen', Curp: '1.0079', numcel: 'H'},
  {matricula: 2, nombre: 'Helium', Curp: '4.0026', numcel: 'He'},
  {matricula: 3, nombre: 'Lithium', Curp: '6.941', numcel: 'Li'},
  {matricula: 4, nombre: 'Beryllium', Curp: '9.0122', numcel: 'Be'},
  {matricula: 5, nombre: 'Boron', Curp: '10.811', numcel: 'B'},
  {matricula: 6, nombre: 'Carbon', Curp: '12.0107', numcel: 'C'},
  {matricula: 7, nombre: 'Nitrogen', Curp: '14.0067', numcel: 'N'},
  {matricula: 8, nombre: 'Oxygen', Curp: '15.9994', numcel: 'O'},
  {matricula: 9, nombre: 'Fluorine', Curp: '18.9984', numcel: 'F'},
  {matricula: 10, nombre: 'Neon', Curp: '20.1797', numcel: 'Ne'},
];

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})




export class RegistrosComponent {
  displayedColumns: string[] = ['Matricula', 'Nombre', 'CURP', 'Numero de Celular'];
  dataSource = ELEMENT_DATA;
}
