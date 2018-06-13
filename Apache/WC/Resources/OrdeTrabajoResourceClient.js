import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class OrdenTrabajoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/ordenTrabajo';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
    
}

export default OrdenTrabajoResourceClient;