import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class EquipoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/equipo';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
      
}

export default EquipoResourceClient;