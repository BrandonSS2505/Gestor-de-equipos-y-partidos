import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Define the EquipoData interface
interface EquipoData {
  nombreEquipo: string;
  capitanEquipo: string;
  matricula1: string; // Agregar el campo de matrícula del capitán
  jugador1: string;
  matricula2: string;
  idDeporte: number;
  idTorneo: number;
  [key: string]: any; // Permite claves dinámicas
}

@Component({
  selector: 'app-team-registration',
  templateUrl: './team-registration.component.html',
  styleUrls: ['./team-registration.component.scss'],
})
export class TeamRegistrationComponent {
  teamName: string = '';
  teamCaptain: string = '';
  teamCaptainMatricula: string = ''; // Cambiado a teamCaptainMatricula para consistencia
  participantes: { nombre: string, matricula: string }[] = [
    { nombre: '', matricula: '' },
    { nombre: '', matricula: '' },
    { nombre: '', matricula: '' },
    { nombre: '', matricula: '' },
    { nombre: '', matricula: '' },
    { nombre: '', matricula: '' }
  ];

  constructor(private http: HttpClient) {}

  goBack() {
    window.history.back();
  }

  onSubmit() {
    const equipoData: EquipoData = {
      nombreEquipo: this.teamName,
      capitanEquipo: this.teamCaptain,
      matricula1: this.teamCaptainMatricula, // Incluir la matrícula del capitán
      jugador1: this.participantes[0]?.nombre || '',
      matricula2: this.participantes[0]?.matricula || '',
      idDeporte: 1, // Reemplaza con el ID del deporte
      idTorneo: 1   // Reemplaza con el ID del torneo
    };

    for (let i = 1; i < this.participantes.length; i++) {
      equipoData[`jugador${i + 1}`] = this.participantes[i].nombre;
      equipoData[`matricula${i + 1}`] = this.participantes[i].matricula;
    }

    this.http.post('http://localhost:3000/api/equipoP', equipoData).pipe(
      catchError(this.handleError)
    ).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
      },
      (error: HttpErrorResponse) => {
        console.error('Error al enviar los datos:', error);
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  agregarParticipante() {
    if (this.participantes.length < 10) {
      this.participantes.push({ nombre: '', matricula: '' });
    }
  }

  eliminarParticipante(index: number) {
    if (this.participantes.length > 5) {
      this.participantes.splice(index, 1);
    }
  }
}