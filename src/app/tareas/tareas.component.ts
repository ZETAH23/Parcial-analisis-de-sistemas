import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit{
  tareas: Tarea[]=[
    {nomMarca:'Nike',
      fechaFundacion:12-2-34,
      origen:'Estados unidos',
      ingresos_anuales:38700,
      empleados:75900
    },
    {
      nomMarca: "Adidas",
      fechaFundacion: 1949,
      origen: "Alemania",
      ingresos_anuales: 23900,
      empleados: 62000
    },
  {
      nomMarca: "Puma",
      fechaFundacion: 1948,
      origen: "Alemania",
      ingresos_anuales: 5700,
      empleados: 14000
  }
  
  ]
  ngOnInit(): void {
    
  }

}
