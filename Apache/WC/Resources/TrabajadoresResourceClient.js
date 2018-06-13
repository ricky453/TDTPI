import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class TrabajadoresResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/trabajadores';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
      
}

export default TrabajadoresResourceClient;