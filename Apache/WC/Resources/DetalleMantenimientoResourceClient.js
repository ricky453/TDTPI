import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class DetalleMantenimientoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/detalleMantenimiento';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
   
}

export default DetalleMantenimientoResourceClient;