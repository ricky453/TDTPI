/* global Httpreq */

import AbstractResourceClient from './AbstractResourceClient.js';

class MarcaResourceClient extends AbstractResourceClient{

	constructor(){
		super();
		this.url=this.url+'/marca';
	}

	findByName(){
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
        edit(data){
          let Httpreq = new XMLHttpRequest();
          Httpreq.open('PUT', this.url+'/editar', true);
          Httpreq.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
          Httpreq.send(JSON.stringify(data));
          console.log(data);
      }
}

export default MarcaResourceClient;
