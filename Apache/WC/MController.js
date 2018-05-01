import MarcaResourceClient from './MarcaResourceClient.js';
// import ListComplete from './ListComplete.js';
class MController extends MarcaResourceClient{
	constructor(){
		super();

	}

	busqueda () {

		this.mrc=new MarcaResourceClient();

		this.mrc.findByName()
		.then(function (response){
            return response.json();
        })
        // .then(function (data){
        	
	       //  let html='';
	       //  data.forEach(function (marca){
	       //  html += ` <option value ${marca.marca}> `
	        
	       //  console.log(marca.marca);
	       //  })
	        
	        
        // })
		}
	
        
	


}


export default MController;

