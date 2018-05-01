import AbstractResourceClient from './AbstractResourceClient.js';

class MarcaResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/marca';
	}

	 findByName () {
		return fetch(this.url+'/nombre');
	}
}

export default MarcaResourceClient;
