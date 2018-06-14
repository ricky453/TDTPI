import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class DiagnosticoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/diagnostico';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
     
}

export default DiagnosticoResourceClient;