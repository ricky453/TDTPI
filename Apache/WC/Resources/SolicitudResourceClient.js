import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class SolicitudResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/solicitud';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
     
}

export default SolicitudResourceClient;