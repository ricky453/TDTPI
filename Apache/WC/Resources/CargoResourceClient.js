import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class CargoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/cargo';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
    
}

export default CargoResourceClient;