import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  partidos: any[] = []; // Arreglo para almacenar la lista de partidos
  filtroSeleccionado: boolean = false; // Variable para controlar la visibilidad de la imagen de "pelotas"

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.obtenerPartidos();
  }

  obtenerPartidos() {
    this.http.get<any[]>('http://localhost:3000/api/partidos').subscribe(
      (response) => {
        this.partidos = response; // Asignar la lista de partidos obtenida al arreglo 'partidos'
      },
      (error) => {
        console.error('Error al obtener los partidos:', error);
      }
    );
  }

  segmentChanged(event: any) {
    const selectedSport = event.detail.value;
    this.loadPartidos(selectedSport);
  }

  loadPartidos(deporte: string) {
    const apiUrl = `http://localhost:3000/api/partidosD/${deporte}`;
    this.http.get<any[]>(apiUrl).subscribe(
      (response) => {
        this.partidos = response; // Asignar la lista de partidos obtenida al arreglo 'partidos'
        this.filtroSeleccionado = true; // Mostrar la imagen de "pelotas" cuando se selecciona un filtro
      },
      (error) => {
        console.error('Error al obtener los partidos:', error);
      }
    );
  }

  verPartidos(partido: any) {
    // Aquí puedes navegar a una página de detalles o realizar otra acción
    console.log('Ver detalles del partido:', partido);
    this.router.navigate(['/detalles']); // Cambia '/torneos' si tienes una ruta específica para detalles de partidos
  }
}