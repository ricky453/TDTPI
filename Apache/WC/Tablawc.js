class Tablawc extends HTMLElement{


	constructor(){
		super();
	}

	connectedCallback(){

		let shadowRoot=this.attachShadow({mode:'open'});

		

		let template=document.getElementById('tablas');

		let templateContent=template.content;

		

		let celda2=document.createElement('td');
		celda2.setAttribute('slot', 'datoss');
		celda2.innerText='lio';
		let jsonObjects='';
		let arregloCabecera= new Array();
		let filas=10;
		let columnas=10;
		let tabla=document.createElement('table');
		tabla.setAttribute('id', 'tabla');
		

		let val=fetch('http://localhost:7070/MantenimientoWeb-web-1.0-SNAPSHOT/webresources/marca')
		.then(function (res){
            return res.json();
        })
        .then(function (data){
        	jsonObjects=data;
        	
        	console.log(data);

        	let contador=0;
        	let tr=document.createElement('tr');
			for (var key in jsonObjects[contador]) {
				   console.log(key);
				   let th=document.createElement('th');
				   th.innerText=key;
				    arregloCabecera[contador]=key;
				    contador++;
				    tr.appendChild(th);
		    }
		    tabla.appendChild(tr);

        	for(var fila=0; fila<jsonObjects.length;fila++){

        	let filas=document.createElement('tr');
			filas.setAttribute('slot', 'dato');
					for(var columna=0;columna<jsonObjects.length;columna++){
						console.log('entrooo');
							let celda=document.createElement('td');
							celda.setAttribute('slot', 'datoss');
							celda.innerText=jsonObjects[fila][arregloCabecera[columna]];
							console.log(celda.innerText);
							filas.appendChild(celda);
							
													
					}
					templateContent.querySelector('#tabla').appendChild(filas);
					tabla.appendChild(filas);
				}     

        	

	        
	        
        });


		

		var clone=document.importNode(templateContent, true);
		

		shadowRoot.appendChild(clone);
		shadowRoot.appendChild(tabla);
	}

}

customElements.define('tabla-wc',Tablawc);