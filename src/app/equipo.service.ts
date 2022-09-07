import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo: any[] = [
    {
      nombre: 'Marlon',
      especialidad: 'JS',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      nombre: 'Carolina',
      especialidad: 'ninguna',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]
  constructor() { }

  obtenerEquipo() {
    return this.equipo
  }

  obtenerUno(i: any) {
    return this.equipo[i]
  }
}
