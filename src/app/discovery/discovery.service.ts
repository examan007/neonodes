// discovery.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscoveryService {
  private apiUrl = 'https://alt000.neolation.net'; // Replace with your actual Discovery Service API endpoint

  constructor(private http: HttpClient) {}

  getNodes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getNodes`);
  }

  getClusterStatus(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/getClusterStatus`);
  }

  registerNode(name: string, ipaddr: string): Observable<any> {
    const body = { name, ipaddr };
    console.log(JSON.stringify(body))
    return this.http.post<any>(`${this.apiUrl}/register`, body);
  }

  deregisterNode(name: string, ipaddr: string): Observable<any> {
    const body = { name, ipaddr };
    return this.http.post<any>(`${this.apiUrl}/deregister`, body);
  }
}

