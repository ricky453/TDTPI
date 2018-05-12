class Tablawc extends HTMLElement{


	constructor(){
		super();
	}

	connectedCallback(){

		let shadowRoot=this.attachShadow({mode:'open'});
		
		let atras=document.createElement('button');
		atras.innerText='Atras';
		atras.setAttribute('id', 'atras');
		let siguiente=document.createElement('button');
		siguiente.innerText='Siguiente';
		siguiente.setAttribute('id', 'siguiente');
		let ultimo=document.createElement('input');
		let primero=document.createElement('input');


		let total=0;
		

		let template=document.getElementById('tablas');

		let templateContent=template.content;
		let alte=0;
		let filas=0;
		let columnas=10;
		let tope=true;
		
		let promesa = this.path(`http://localhost:7070/MantenimientoWeb-web-1.0-SNAPSHOT/webresources/marca`);

		promesa.then(data=>{
			let cont=this.tabla(data,true,false,0);
			shadowRoot.appendChild(atras);
			shadowRoot.appendChild(siguiente);
			shadowRoot.appendChild(cont);
		})

        siguiente.addEventListener('click', e=>{
        	
	        	let hijo=document.querySelector('tabla-wc').shadowRoot.querySelector('#micontainer');
	        	shadowRoot.removeChild(hijo);

	        	promesa.then(data=>{
	        		alte=alte+2;
				let cont=this.tabla(data,false,true,alte);
				
				shadowRoot.appendChild(cont);
				})
        
        })


        atras.addEventListener('click', e=>{
        	let hijo=document.querySelector('tabla-wc').shadowRoot.querySelector('#micontainer');
        	shadowRoot.removeChild(hijo);
        	promesa.then(data=>{
        		alte=alte-2;
			let cont=this.tabla(data,false,false,alte);
			

			shadowRoot.appendChild(cont);
		})
        })
		
		var clone=document.importNode(templateContent, true);
		
		

		shadowRoot.appendChild(clone);
		
	}

	tabla(json,primero,sig,alterador){

		let jsonObjects=json;
		if (primero==true) {
			let mostrar = jsonObjects.length-8;
			this.total=jsonObjects.length;
			this.total=this.total-2;
			this.filas=jsonObjects.length-mostrar;
			
			
		}else if(sig==true){
			
				this.filas=this.filas+2;
			
			
			if (this.filas>jsonObjects.length) {
				let diferencia=this.filas-jsonObjects.length;
				console.log(diferencia);
				if (diferencia==1) {
					this.filas=this.filas-1;
					this.tope=false;
					console.log(this.tope);
					
				}else{
				
				}
				
			}
		}else if (sig==false) {
			this.filas=this.filas-2;
			if (this.filas>jsonObjects.length) {
				let diferencia=jsonObjects.length-this.filas;
				if (diferencia==1) {
					this.filas=this.filas+1;
					
				}else{
					this.filas=this.filas+2;
				}
				
			}else{
				
			}
		}


		let arregloCabecera= new Array();
		let contenedor=document.createElement('div');
		contenedor.setAttribute('id', 'micontainer');
		let tabla=document.createElement('table');
		tabla.setAttribute('id', 'tabla');
		
		let contador=0;
        	let tr=document.createElement('tr');
			for (var key in jsonObjects[contador]) {
				   
				   let th=document.createElement('th');
				   th.innerText=key;
				    arregloCabecera[contador]=key;
				    contador++;
				    tr.appendChild(th);
		    }
		    tabla.appendChild(tr);

        	for(var fila=0+alterador; fila<this.filas;fila++){

        	let filas=document.createElement('tr');
			filas.setAttribute('slot', 'dato');
					for(var columna=0;columna<arregloCabecera.length;columna++){
						
							let celda=document.createElement('td');
							celda.setAttribute('slot', 'datoss');
							celda.innerText=jsonObjects[fila][arregloCabecera[columna]];
							
							filas.appendChild(celda);
							
													
					}
					tabla.appendChild(filas);
				} 
				contenedor.appendChild(tabla);  
				return contenedor;  

	}

	path(URI){
        return fetch(URI)  
            .then(r => r.json());
    } 

}

customElements.define('tabla-wc',Tablawc);
