import AbstractResourceClient from '../Abstract/AbstractResourceClient.js';

class CalendarioResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/calendario';
	}

	findByName () {
		return fetch(this.url+'/nombre');
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

export default CalendarioResourceClient;