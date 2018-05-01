
class ListComplete extends HTMLElement{

	constructor(){
		super();
	}

	connectedCallback(){
		let shadowroot=this.attachShadow({mode: 'open'});
		let chingona=new Array();
		let detallesMarca=new Array();
		let clickInterno=false;
		let jsonObjects='';

		
		let formulario=document.createElement('form');
		formulario.setAttribute('id', 'myForm');

		let inputTexto=document.createElement('input');
		inputTexto.setAttribute('list', 'lista');

		let dataLista=document.createElement('datalist');
		dataLista.setAttribute('id', 'lista');

		let opcion=document.createElement('option');;
		opcion.setAttribute('value', "Marca");

		dataLista.appendChild(opcion);

		
		// let controlador=0;
		// formulario.addEventListener('click', e=>{
		// 	// console.log(this.getOpciones().length);
		// 	if (controlador==0) {
		// 	for (var i = 0 ; i< this.chingona.length; i++) {
		// 			let opcion=document.createElement('option');
		// 			opcion.setAttribute('value', this.chingona[i]);
		// 			console.log(this.chingona[i]);
		// 			dataLista.appendChild(opcion);
		// 			controlador++;
		// 			// console.log(controlador);
		// 		}
		//  }
 
		// });
		
		// boton.addEventListener('click', e=>{
			
		//  // console.log(inputTexto.value);

		//  let valorLista=inputTexto.value;


		//  for (var i = 0 ; i< this.chingona.length; i++) {
		// 			if (valorLista==this.chingona[i]) {
		// 				console.log('se encontro'+valorLista);
		// 				console.log(this.jsonObjects[i].marca);
		// 				console.log(this.jsonObjects[i].idMarca);
		// 				detallesMarca[0]=this.jsonObjects[i].marca;
		// 				detallesMarca[1]=this.jsonObjects[i].idMarca;
		// 				detallesMarca[2]=this.jsonObjects[i].descripcion;
		// 				detallesMarca[3]=this.jsonObjects[i].detalleEquipoList;

		// 				this.setDetallesMarca(detallesMarca);
		// 				this.clickInterno=true;
		// 			}
		// 		}

 
		// });


		formulario.appendChild(inputTexto);
		formulario.appendChild(dataLista);
		

		shadowroot.appendChild(formulario);

	}

	 setOpciones(obj){
	 	
		this.chingona=obj;

	}

	 getOpciones(){
	 	console.log(this.chingona);
		return this.chingona;
	}

	setJsonObjects(jsons){
		this.jsonObjects=jsons;
		console.log(this.jsonObjects);
	}

	getJsonObjects(){
		return this.jsonObjects;
	}

	setDetallesMarca(detalles){
		this.detallesMarca=detalles;
		console.log(this.detallesMarca);
	}

	getDetallesMarca(){
		return this.detallesMarca;
	}

	getClickInterno(){
		return this.clickInterno;
	}

}


customElements.define('lista-comp',ListComplete);
