import { Component } from '@angular/core';

export interface Personas {
  nombre: string;
  matricula: number;
  Curp: string;
  numcel: number;
}

const ELEMENT_DATA: Personas[] = [
  {matricula: 12755, nombre: 'Gustavo', Curp: 'BORG040523HNLRMSA7', numcel: 8211202886},
  {matricula: 12781, nombre: 'Brandon', Curp: 'SAGB990213HNLRNR06', numcel: 8211110434},
  {matricula: 12762, nombre: 'Jonathan', Curp: 'COPJ040126HVZRRNA4', numcel: 8287686734},
  {matricula: 12780, nombre: 'Yeretzi', Curp: 'SAVY040926MNLNZRA0', numcel: 5628414013},
  {matricula: 12782, nombre: 'José Reynaldo', Curp: 'SIGR040605HNLLRYA8', numcel: 8135585770},
  {matricula: 12772, nombre: 'Alejandra', Curp: 'LUZA010301MNLCXLA2', numcel: 8212116688},
  {matricula: 12753, nombre: 'Carlos Alberto', Curp: 'AAMC041101HNLLNRA0', numcel: 8443107971},
  {matricula: 12752, nombre: 'Karen', Curp: 'AAMK030619MNLLRRB6', numcel: 8211066839},
  {matricula: 12761, nombre: 'Carlos', Curp: 'COLC010315HCHRPRA2', numcel: 6761141373},
  {matricula: 12763, nombre: 'Bryan', Curp: 'ROMB041124HNLSDRA9', numcel: 8211028403},
  {matricula: 12765, nombre: 'Jose Manuel', Curp: 'FUIM050817HNLNRNA0', numcel: 6761141373}
];

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})




export class RegistrosComponent {
  displayedColumns: string[] = ['matricula', 'nombre', 'Curp', 'numcel'];
  dataSource = ELEMENT_DATA;
}
