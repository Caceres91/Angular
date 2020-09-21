import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { PublicacionComponent } from './componentes/modals/publicacion/publicacion.component';
import { ImagenComponent } from './componentes/modals/imagen/imagen.component';
import { UpdateComponent } from './componentes/modals/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    ChatComponent,
    PublicacionComponent,
    ImagenComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
