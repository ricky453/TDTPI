class Tablawc extends HTMLElement{


	constructor(){
		super();
	}

	connectedCallback(){

		let shadowRoot=this.attachShadow({mode:'open'});
		
		let atras=document.createElement('button');
		atras.innerText='Atras';
		atras.setAttribute('id', 'atras');
		var siguiente=document.createElement('button');
                siguiente.setAttribute('id', 'siguiente');
		siguiente.innerText='Siguiente';
		let ultimo=document.createElement('input');
		let primero=document.createElement('input');
                atras.disabled = true;

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
            let siguiente = document.querySelector('tabla-wc').shadowRoot.querySelector('#siguiente');
            let atras = document.querySelector('tabla-wc').shadowRoot.querySelector('#atras');

                //console.log(document.querySelector('tabla-wc').shadowRoot.querySelector('#siguiente'));
		let jsonObjects=json;
		if (primero==true) {
			let mostrar = jsonObjects.length-8;
			this.total=jsonObjects.length;
			this.total=this.total-2;
			this.filas=jsonObjects.length-mostrar;
			
			
		}else if(sig==true){

		        this.filas=this.filas+2;	
                        atras.disabled = false;
			console.log(this.filas + " < " + jsonObjects.length)
			if (this.filas===jsonObjects.length) {
                            siguiente.disabled = true;
			}
                        
		}else if (sig==false) {
			this.filas=this.filas-2;
                        siguiente.disabled = false;
                        if(this.filas === 8){
                            atras.disabled = true;
                        }
		}


		let arregloCabecera= new Array();
		let contenedor=document.createElement('div');
		contenedor.setAttribute('id', 'micontainer');
		let tabla=document.createElement('table');
		tabla.setAttribute('id', 'tabla');
		
		let contador=0;
                let count=0;
                let header = [];
                let saltar;
                let primerizo = [];
        	let tr=document.createElement('tr');
                for(let cabecera in jsonObjects[contador]){ 
                            if(header.indexOf(cabecera)===-1){
                            header.push(cabecera);
                            if(cabecera.indexOf("detalle")>-1){//para buscar cabeceras que tengan detalle
                                saltar=cabecera;
                            }                   
                            if(cabecera.indexOf("id")>-1){
                                primerizo[count] = cabecera;
                                count++;
                            }
                        } 
                }   
                let borrar=header.indexOf(saltar); 
                header.splice(borrar, 1); //se elimina la cabecera detalle
                        var count2=0;
                        for(var i=0;i<header.length;i++){//ordenar tabla, id primero
                            for(var j=0; j < primerizo.length;j++){
                                if(header[i] === primerizo[j]){
                                    var trade = header[count2]; //primera posicion del arreglo
                                    header[count2] = primerizo [j]; //pasando el id al principio
                                    primerizo[j] = trade;
                                    header[i] = trade;
                                    count2++;
                                }
                            }
                        }
			for (let key in header) {
                            
				   let th=document.createElement('th');
				   th.innerText=header[key];
				    arregloCabecera[contador]=header[key];
				    contador++;
				    tr.appendChild(th);
		    }
		    tabla.appendChild(tr);

 
                
                
        	for(var fila=0+alterador; fila<this.filas;fila++){
                    let filas=document.createElement('tr');
	            filas.setAttribute('slot', 'dato');
                    for(var columna=0;columna<header.length;columna++){


                                    let celda=document.createElement('td');
                                    celda.setAttribute('slot', 'datos');
                                    celda.innerText=jsonObjects[fila][header[columna]];
                                    filas.appendChild(celda);
                                    celda.contentEditable="true";



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
    pathActualizar(URI){
        return fetch(URI, {
            method: 'PUT',
            body: datos
        })
        .then(r=> r.json());
    }

}

customElements.define('tabla-wc',Tablawc);
