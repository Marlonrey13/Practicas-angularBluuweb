import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  equipo: any[] = []

  constructor(private _servicio:EquipoService) {
    this.equipo = _servicio.obtenerEquipo()
  }

  ngOnInit(): void {
  }

}
