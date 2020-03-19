import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  
})
export class BreadcrumbsComponent implements OnInit {

  label: string='';

  constructor(private router: Router,
                private title: Title,
                private meta: Meta ) { 
    
     this.getDataRoute()
    .subscribe( data =>{
        
        this.label= data.titulo;
        this.title.setTitle( this.label );

      const metaTag: MetaDefinition = {

        name: 'description',
        content: this.label
      };
      this. meta.updateTag(metaTag);

    });
  }

  ngOnInit(): void {
  }

  getDataRoute(){
    return this.router.events.pipe(

      filter(evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild == null),
      map ((evento: ActivationEnd )=> evento.snapshot.data )
        
      )  
  }

}
