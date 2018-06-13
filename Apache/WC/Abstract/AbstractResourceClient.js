class AbstractResourceClient{

	constructor(){
		this.url='http://localhost:7070/MantenimientoWeb-web-1.0-SNAPSHOT/webresources';
	}
	get obtenerUrl(){
		return this.url;
	}
	
	findAll(){
		return fetch(this.url);
	}
	count(){
		return fetch(this.url+'/count');
	}

	findRange(low, high){
		return fetch(this.url+'/findRange?lower='+low+'&higher='+high);
	}
	
}

export default AbstractResourceClient;
