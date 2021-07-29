import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {GameList, WordList, WordSingle} from "../interfaces/search.interfaces";


@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) {
    }

    get_word_list(params?: HttpParams): Observable<[WordList]> {
        return this.http.get<[WordList]>(`${environment.apiUrl}/assistant/word`, {params: params})
    }

    get_single(id: number): Observable<WordSingle> {
        return this.http.get<WordSingle>(`${environment.apiUrl}/assistant/word/${id}`);
    }

    get_game_list(params?: HttpParams): Observable<[GameList]> {
        return this.http.get<[GameList]>(`${environment.apiUrl}/assistant/game`, {params: params})
    }
}
