import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users:string[];

  constructor() { 
    this.users = [ 'un', 'deux' ];
  }

  getUsers() {
    return this.users;
  }
}
