import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.page.html',
  styleUrls: ['./atractivos.page.scss'],
})
export class AtractivosPage implements OnInit {
private atractivos =[
{
  id: '1',
  titulo: 'Torre Eifel',
  imagenURL: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
  comentario: ['hermoso', 'elegante']
},
{
  id: '2',
  titulo: 'Machu Picchu',
  imagenURL: 'https://www.peru.travel/Contenido/Atractivo/Imagen/pe/145/1.1/Principal/Machu%20Picchu.jpg',
  comentario: ['hermoso', 'elegante']
}

]

  constructor() { }

  ngOnInit() {
  }

}
