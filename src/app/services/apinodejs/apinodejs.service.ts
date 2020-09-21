import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from './../../../app/models/publicacion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApinodejsService {

  url = 'http://localhost:3000/api/publicacion';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:comment-format
  // tslint:disable-next-line:typedef
  getPublicaciones(){
    return this.http.get(`${this.url}`);
  }

  // tslint:disable-next-line:comment-format
  //tslint:disable-next-line:typedef
  getPublicacion(id: string){
    return this.http.get(`${this.url}/${id}`);
  }

  // tslint:disable-next-line:typedef
  createPublicacion(publicacion: Publicacion){
    return this.http.post(`${this.url}`, publicacion);
  }

  // tslint:disable-next-line:typedef
  updatePublicacion(id: string|number, publicardenuevo: Publicacion): Observable<Publicacion>{
    return this.http.put(`${this.url}/${id}`, publicardenuevo);
  }

  // tslint:disable-next-line:typedef
  deletePublicacion(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }
}
