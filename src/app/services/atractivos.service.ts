import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

var api = 'https://portalciudadano.ibarra.gob.ec/srvPortalTuristico/index.php/';
@Injectable({
  providedIn: 'root'
})
export class AtractivosService {

  constructor(private http: HttpClient) { }

  get_imagenes_slider(){
    return new Promise( resolve => {
      this.http.get(api + 'getSliderData')
        .subscribe(
          data => {
            
            resolve(data);
          },
          err => {
            console.log(err);
          }
        )
    })
  }
}
