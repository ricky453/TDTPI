import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class DetalleEquipoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/detalleEquipo';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
     
}

export default DetalleEquipoResourceClient;