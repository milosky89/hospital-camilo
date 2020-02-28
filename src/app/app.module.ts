
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTES } from './app.routes';


//Modulos
import { PageModule } from './pages/pages.module';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './login/registrer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,      
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
