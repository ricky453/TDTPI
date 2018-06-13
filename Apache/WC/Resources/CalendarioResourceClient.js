import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class CalendarioResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/calendario';
	}

	findByName () {
		return fetch(this.url+'/nombre');
	}       
   
}

export default CalendarioResourceClient;