import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost/base'; // URL de la API
  private usuarioRol: string = '';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login.php`, { email, password });
  }

  setUsuarioRol(rol: string): void {
    this.usuarioRol = rol;
    localStorage.setItem('userRole', rol);
  }

  obtenerRolUsuario(): string {
    return this.usuarioRol || localStorage.getItem('userRole') || '';
  }

  logout(): void {
    this.usuarioRol = '';
    localStorage.removeItem('userRole');
  }

  getSimCards(): Observable<any> {
    console.log('Llamando a getSimCards');
    return this.http.get<any>(`${this.apiUrl}/get_sim_cards.php`);
  }

  addSimCard(sim: { iccid: string; operador: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_sim_card.php`, sim);
  }

  getSimCardById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get_sim_cards.php`, {
      params: { id },
    });
  }

  deleteSimCard(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete_sim_card.php`, {
      params: { id: id.toString() },
    });
  }

  updateSimCard(
    id: string,
    sim: { iccid: string; operador: string }
  ): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/update_sim_card.php`, {
      id,
      ...sim,
    });
  }
}
