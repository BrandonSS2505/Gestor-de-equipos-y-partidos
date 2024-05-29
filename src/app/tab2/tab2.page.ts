import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  torneos: any[] = [];
  todosLosTorneos: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.obtenerTorneos();
  }

  obtenerTorneos() {
    this.http.get<any[]>('http://localhost:3000/api/torneosG').subscribe(
      (response) => {
        this.torneos = response;
        this.todosLosTorneos = response; // Guardar todos los torneos
      },
      (error) => {
        console.error('Error al obtener los torneos:', error);
      }
    );
  }

  verPartidos(idTorneo: any) {
    if (idTorneo) {
      this.router.navigate(['/torneos', idTorneo]);
    } else {
      console.error('ID del torneo es indefinido');
    }
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    if (selectedValue) {
      this.torneos = this.todosLosTorneos.filter(torneo => torneo.Deporte.toLowerCase() === selectedValue.toLowerCase());
    } else {
      this.torneos = this.todosLosTorneos;
    }
  }
}