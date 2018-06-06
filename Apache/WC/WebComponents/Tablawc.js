class Tablawc extends HTMLElement{


	constructor(){
		super();
                this._shadowRoot = this.attachShadow({mode:'open'});
                                
	}

	connectedCallback(){
		let template=document.getElementById('tablas');
		let templateContent=template.content;
		var clone=document.importNode(templateContent, true);
		this._shadowRoot.appendChild(clone);
		
	}
        
        definirTabla(data){
            let none = this.tabla(data,0,5);
            this._shadowRoot.appendChild(none);
        }
        
        modificarTabla(data){
                let hijo=this._shadowRoot.querySelector('#micontainer');
            let none = this.tabla(data);
            this._shadowRoot.replaceChild(none, hijo);
        }
        
        
	tabla(json){
		let jsonObjects=json;
                this.filas=jsonObjects.length;

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
                            if(cabecera.indexOf("Collection")>-1){//para buscar cabeceras que tengan detalle
                                saltar=cabecera;
                                let borrar=header.indexOf(saltar); 
                                header.splice(borrar, 1); //se elimina la cabecera detalle
                            }
                            let cab = cabecera.charAt(0)+cabecera.charAt(1);
                            if(cab.indexOf('id')>-1){
                                primerizo[count] = cabecera;
                                count++;
                            }
                        } 
                    }   
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
                
        	for(var fila=0; fila<this.filas;fila++){
                    let filas=document.createElement('tr'); 
	            filas.setAttribute('slot', 'dato');
                    filas.setAttribute('id', 'islot');
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

}

customElements.define('tabla-wc',Tablawc);
export default Tablawc;
