import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Raffle } from '../models/raffle.model';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {
  private apiUrl = `${environment.apiUrl}/raffles`;

  constructor(private http: HttpClient) {}

  getAllRaffles(): Observable<Raffle[]> {
    return this.http.get<Raffle[]>(this.apiUrl);
  }

  getRaffleById(id: number): Observable<Raffle> {
    return this.http.get<Raffle>(`${this.apiUrl}/${id}`);
  }

  createRaffle(raffle: Raffle): Observable<Raffle> {
    return this.http.post<Raffle>(this.apiUrl, raffle);
  }

  conductDraw(id: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${id}/draw`, {});
  }
}