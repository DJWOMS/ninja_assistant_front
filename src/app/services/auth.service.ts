import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import {GoogleToken} from "../interfaces/auth.interfaces";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private GoogleAuthUrl = environment.authGoogle;


  public getToken(): string | null {
    if (sessionStorage.getItem('Token')) {
      return sessionStorage.getItem('Token');
    } else {
      return null;
    }
  }

  public getIDUser(): string | null {
    if (sessionStorage.getItem('id')) {
      return sessionStorage.getItem('id');
    } else {
      return null;
    }
  }
  // @ts-ignore
  public getAvatar(): string {
    if (sessionStorage.getItem('avatar')) {
      return sessionStorage.getItem('avatar') || '';
    }
  }

  public setAvatar(avatar: string): void {
    sessionStorage.setItem('avatar', avatar);
  }

  public setToken(id: number, token: string): void {
    this.removeToken();
    sessionStorage.setItem('id', String(id));
    sessionStorage.setItem('Token', token);
  }

  public removeToken(): void {
    if (sessionStorage.getItem('Token')) {
      sessionStorage.removeItem('Token');
      sessionStorage.removeItem('id');
      sessionStorage.removeItem('avatar');
    }
  }

  public postGoogleToken(token: any): Observable<GoogleToken> {
    return this.http.post<GoogleToken>(this.GoogleAuthUrl, token);
  }


  getStatus(): Observable<any> {
    return this.http.get(environment.apiUrl + 'api/v1/auth/chek-auth', { observe: 'response' });
  }

  signOut(): Observable<any> {
    // Remove the access token from the local storage
    this.removeToken();
    // Return the observable
    return of(true);
  }
}
