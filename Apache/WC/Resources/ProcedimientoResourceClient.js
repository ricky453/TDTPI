import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class ProcedimientoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/procedimiento';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
     
}

export default ProcedimientoResourceClient;