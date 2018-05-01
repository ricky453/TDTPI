class Botonwc extends HTMLElement{

	constructor(){
		super();
	}

	connectedCallback(){
		let shadowroot=this.attachShadow({mode:'open'});
		let listaComp=document.querySelector('lista-comp');  //Obteniendo wc del dom
		let jsonObjects='';
		let arreglojson=new Array();
		let miInput=listaComp.shadowRoot.querySelector('input');  //Obteniendo input del wc del shadow dom
		

		let boton=document.createElement('input');
		boton.setAttribute('type', 'button');
		boton.setAttribute('value', 'Mostrar');

		let caja=document.createElement('textarea');

		boton.addEventListener('click', e =>{
			let valorLista=miInput.value;
			console.log(valorLista);
			console.log(this.jsonObjects);


			
			// let cadena='';
			// for (var i = 0; i < this.arreglojson.length; i++) {
			// 	if (valorLista==this.arreglojson[i]){
			// 		cadena+=this.jsonObjects[i].marca+' ';
			// 		cadena+=this.jsonObjects[i].idMarca+' ';
			// 		cadena+=this.jsonObjects[i].descripcion+' ';
			// 		cadena+=this.jsonObjects[i].detalleEquipoList;
			// 		caja.innerText=cadena;
			// 	}
			// }
			console.log(this.jsonObjects.length);
			let cambioCabecera=false;
			let arregloCabecera= new Array();

			//Obteniendo cabecera
			let contador=0;
			for (var key in this.jsonObjects[contador]) {
				   console.log(key);
				    arregloCabecera[contador]=key;
				    contador++;
		    }

			if (valorLista=='Marca') {
				for(var fila=0; fila< this.jsonObjects.length;fila++){
					for(var columna=0;columna<this.jsonObjects.length;columna++){
						
							let valor=arregloCabecera[columna];
							console.log(this.jsonObjects[fila][arregloCabecera[columna]]);
						
					}
				}
			}

		});

		shadowroot.appendChild(boton);
		// shadowroot.appendChild(caja);
	}

	setOpciones(obj){
	 	
		this.arreglojson=obj;

	}

	 getOpciones(){
	 	console.log(this.arreglojson);
		return this.arreglojson;
	}

	setJsonObjects(jsons){
		this.jsonObjects=jsons;
		console.log(this.jsonObjects);
	}

	getJsonObjects(){
		return this.jsonObjects;
	}


}

customElements.define('boton-wc',Botonwc);