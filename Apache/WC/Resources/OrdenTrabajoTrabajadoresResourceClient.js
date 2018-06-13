import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class OrdenTabajoTrabajadoresResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/ordenTrabajoPorTrabajadores';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
      
}

export default OrdenTabajoTrabajadoresResourceClient;