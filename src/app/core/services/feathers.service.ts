import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import * as featherRx from 'feathers-reactive';
import * as io from 'socket.io-client';

import feathers from '@feathersjs/feathers';
import feathersSockClient from '@feathersjs/socketio-client';
import feathersAuthClient from '@feathersjs/authentication-client';

@Injectable({
	providedIn: 'root'
})
export class FeathersService {
	private _feathers = feathers();
	private _socket = io(environment.host);

	constructor() {
		this._feathers
			.configure(feathersSockClient(this._socket))
			.configure(feathersAuthClient({ storage: window.localStorage }))
			.configure(featherRx({ idField: '_id' }));
  }
  
  public service(name:string){
	  return this.feathers.service(name);
  }

  public authentication(credentials):Promise<any>{
	  return this.feathers.authenticate(credentials);
  }

  public logout():Promise<any>{
	  return this.feathers.logout();
  }

}
