import { AtractivosService } from './../services/atractivos.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  imagenes ;
  constructor(private atractivosService: AtractivosService) { }

  ngOnInit() {
    this.get_slider();
  }

  get_slider(){
    this.atractivosService.get_imagenes_slider()
    .then(data =>{
      this.imagenes = data;
      console.log(this.imagenes);
      
    })
  }
}
