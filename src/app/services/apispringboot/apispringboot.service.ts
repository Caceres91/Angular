import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Publicacion } from './../../../app/models/publicacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApispringbootService {

  url = 'http://localhost:2020/publicacion';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:comment-format
  // tslint:disable-next-line:typedef
  getPublicaciones(){
    return this.http.get(`${this.url}/all`);
  }

  // tslint:disable-next-line:comment-format
  //tslint:disable-next-line:typedef
  getPublicacion(id: string){
    return this.http.get(`${this.url}/${id}`);
  }

  // tslint:disable-next-line:typedef
  createPublicacion(publicacion: Publicacion){
    return this.http.post(`${this.url}/create`, publicacion);
  }

  // tslint:disable-next-line:typedef
  updatePublicacion(publicardenuevo: Publicacion): Observable<Publicacion>{
    return this.http.put(`${this.url}/update`, publicardenuevo);
  }

  // tslint:disable-next-line:typedef
  deletePublicacion(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }
}
