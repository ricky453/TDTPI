import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class PasosResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/pasos';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
     
}

export default PasosResourceClient;