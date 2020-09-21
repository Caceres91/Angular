import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApispringbootService } from './../../../services/apispringboot/apispringboot.service';
import { ApinodejsService } from './../../../services/apinodejs/apinodejs.service';
import { Publicacion } from './../../../models/publicacion';


@Component({
  selector: 'umg-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.scss']
})
export class ImagenComponent implements OnInit {

  
  publicacion: Publicacion = {
    imagen: '',
    descripcion: ''
  // tslint:disable-next-line:semicolon
  }

  constructor(private publicacionService: ApispringbootService,
              private publicacionServiceNo: ApinodejsService  ,
              private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPublicacionwithSpring(): void{
    console.log('spring');
    console.log(this.publicacion);
    
    delete this.publicacion.id;
    this.publicacionService.createPublicacion(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.error(err)
      );
  }

  GuardarPublicacionNode(): void {
    console.log('nodes')
    delete this.publicacion.id;
    this.publicacionServiceNo.createPublicacion(this.publicacion)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
  }

  OnFileChange(): void{

  }

}
