import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './componentes/modals/update/update.component';
import {PrincipalComponent} from './componentes/principal/principal.component';

const routes: Routes = [
  { path: 'publicacion/:id', component: UpdateComponent },
  // tslint:disable-next-line:comment-format
  //{ path: 'principal', component: PrincipalComponent },
  { path: '', component: PrincipalComponent },
  // tslint:disable-next-line:whitespace
  { path: '**', pathMatch:'full', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
