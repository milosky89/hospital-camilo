import { Usuario } from './../models/usuario.model';
import { UsuarioService } from './../services/service.index';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

   recuerdame: boolean= false;
   email: string;
   auth2: any;

  constructor(public router: Router,
              public usuarioService: UsuarioService) { }

  ngOnInit() {

    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if ( this.email.length > 1){
      this.recuerdame=true;
    }
  }

  googleInit(){
    gapi.load('auth2', () =>{
          this.auth2= gapi.auth2.init({
            client_id:'1032253939067-cgbr7c86kao8ugggm7lnnnkf47jr0agm.apps.googleusercontent.com',
            cookiepolicy:'single_host_origin',
            scope: 'profile email'
          });
        this.attachSingin(document.getElementById('btnGoogle'));

    });
  }
  
  attachSingin( element ){
      
      this.auth2.attachClickHandler( element, {}, (googleUser) =>{
      
      let token= googleUser.getAuthResponse().id_token;

      this.usuarioService.loginGoogle(token)
              .subscribe(() => window.location.href = '#/dashboard' );            
    });
  }


  ingresar(forma: NgForm){

    if(forma.invalid){
      return;
    }

    let usuario= new Usuario(null,forma.value.email,forma.value.password);
    this.usuarioService.login(usuario, forma.value.recuerdame)
                      .subscribe(correcto => this.router.navigate(['/dashboard']) );       
  }

}
