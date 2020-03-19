import { UsuarioService } from './../usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
 
  constructor(public usuarioservice:UsuarioService,
              public router:Router){}

  canActivate(){

    if( this.usuarioservice.estaLogueado() ){
      console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('Bloqueado por el guard');
      this.router.navigate(['/login']);
      return false;
    }
         
  }
    
  
  
}
