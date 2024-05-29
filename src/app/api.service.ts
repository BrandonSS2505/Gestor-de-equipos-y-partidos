import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // URL base de tu API

  constructor(private http: HttpClient) {}

  // Método para obtener todos los torneos
  verTorneos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/torneos`);
  }

  // Método para obtener los torneos por categoría
  verTorneosPorCategoria(categoria: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/torneos?categoria=${categoria}`);
  }

  // Otros métodos para interactuar con tu API, como crear, editar o eliminar torneos, etc.
}