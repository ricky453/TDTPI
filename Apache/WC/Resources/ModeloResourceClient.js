import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class ModeloResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/modelo';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
      
}

export default ModeloResourceClient;
