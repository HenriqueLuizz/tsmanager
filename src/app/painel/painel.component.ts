import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  @Input() titulo: string;
    elemento: ElementRef;

    constructor(elemento: ElementRef){
        this.elemento = elemento;
    }

    ngOnInit() {
        this.titulo = this.titulo.length > 7 
        ? this.titulo.substr(0,7) + '...' 
        : this.titulo;
    }

    faceOut(cb){
        this.elemento.nativeElement.faceOut(cb);
    }
}
