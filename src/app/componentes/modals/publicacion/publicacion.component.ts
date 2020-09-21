import { Component, OnInit } from '@angular/core';
import { ApispringbootService } from './../../../services/apispringboot/apispringboot.service';
import { ApinodejsService } from './../../../services/apinodejs/apinodejs.service';

@Component({
  selector: 'umg-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {

  publicaciones: any = []; 

  constructor(private publicacionService: ApispringbootService,
              private publicacionServiceNo: ApinodejsService) { }

  ngOnInit(): void {
     this.getPublicacionesSpring();
     //this.getPublicacionesNode();
  }

  getPublicacionesSpring(): void{
    this.publicacionService.getPublicaciones()
    .subscribe(
      res => {
        this.publicaciones = res;
      },
      err => console.error(err)
    );
  }

  getPublicacionesNode(): void {
    this.publicacionServiceNo.getPublicaciones()
      .subscribe(
        res => {
          this.publicaciones = res;
      },
      err => console.error(err)
      );
  }

  deleteSpring(id: string): void {
    if (confirm('Estas seguro de eliminar esta publicacion?')) {
      this.publicacionService.deletePublicacion(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPublicacionesSpring();
        },
        err => console.error(err)
      );
    }
  }

  deleteNode(id: string): void {
    if (confirm('Estas seguro de eliminar esta publicacion?')) {
      this.publicacionServiceNo.deletePublicacion(id)
        .subscribe(
          res => {
            console.log(res);
            this.getPublicacionesNode();
          },
          err => console.error(err)
        );
    }
  }

}
