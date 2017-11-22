import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  colors:string[];

  constructor( public http:Http ) { 
    this.colors = [ 'rouge', 'bleu' ];
  }

  getUsers() {
    return this.http.get( 'http://jsonplaceholder.typicode.com/users' ).map( res => res.json() );
  }

  getColors() {
    return this.colors;
  }
}
