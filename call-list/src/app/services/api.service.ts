// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../models/student';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API path
  basePath = 'https://chamada-automatica-backend.herokuapp.com';

  private usuarioPath: string;
  private loginPath: string;

  constructor(private http: HttpClient) {
    this.usuarioPath = this.basePath + '/usuario';
    this.loginPath = this.basePath + '/login';
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


  // Create a new item
  createItem(item): Observable<Student> {
    return this.http
      .post<Student>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get single student data by ID
  getItem(id): Observable<Student> {
    return this.http
      .get<Student>(this.basePath + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get students data
  getList(): Observable<Student> {
    return this.http
      .get<Student>(this.basePath)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Update item by id
  updateItem(id, item): Observable<Student> {
    return this.http
      .put<Student>(this.basePath + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Student>(this.basePath + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  postLogin(login: Login): Observable<Usuario> {
    return this.http
      .post<Usuario>(this.loginPath, JSON.stringify(login), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getUsuarios(): Observable<Usuario> {
    return this.http
      .get<Usuario>(this.usuarioPath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http
      .post<Usuario>(this.usuarioPath, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http
      .post<Usuario>(`${this.usuarioPath}/${usuario.id}`, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
