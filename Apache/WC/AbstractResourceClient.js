class AbstractResourceClient{

	constructor(){
		this.url='http://localhost:7070/MantenimientoWeb-web-1.0-SNAPSHOT/webresources';
	}

	get obtenerUrl(){
		return this.url;
	}
}

export default AbstractResourceClient;