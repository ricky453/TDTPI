import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class EstadoDetalleMantenimientoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/estadoDetalleMantenimiento';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
      
}

export default EstadoDetalleMantenimientoResourceClient;