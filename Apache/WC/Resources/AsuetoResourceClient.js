import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class AsuetoResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/asuetos';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}            
        
}

export default AsuetoResourceClient;
