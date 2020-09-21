import { ApinodejsService } from './../../../services/apinodejs/apinodejs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApispringbootService } from './../../../services/apispringboot/apispringboot.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Publicacion } from 'src/app/models/publicacion';


@Component({
  selector: 'umg-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  publicacion: Publicacion = {
    id: 0,
    imagen: '',
    descripcion: ''
  // tslint:disable-next-line:semicolon
  }

  constructor(private updateService: ApispringbootService,
              private updateServiceNode: ApinodejsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const parametros = this.activatedRoute.snapshot.params;
    if (parametros.id) {
      // this.updateService.getPublicacion(parametros.id)
      //  .subscribe(
      //   res => {
      //     this.publicacion = res;
      //   },
      //   err => console.error(err)
      // );
      this.updateServiceNode.getPublicacion(parametros.id)
        .subscribe(
          res => {
            this.publicacion = res;
          },
          err => console.error(err)
        );
    }
  }

  updatePublicaciones(myform: NgForm): void {
    this.updateService.updatePublicacion(myform.value)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.error(err)
      );
  }

  UpdatePublicacionesNode(myform: NgForm): void {
    const llave = this.activatedRoute.snapshot.params;
    console.log(llave.id);
    console.log(myform.value);
    this.updateServiceNode.updatePublicacion(llave.id, myform.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      );
  }

}
