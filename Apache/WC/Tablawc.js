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
                siguiente.setAttribute('id', 'siguiente');
		siguiente.innerText='Siguiente';
		let ultimo=document.createElement('input');
		let primero=document.createElement('input');
                atras.disabled = true;
                
                
                //lista
                let num = 5;
                let tamanios = ["5", "10", "25", "50", "100"];
                let cmbPaginado = document.createElement('select');
                cmbPaginado.setAttribute('id','cmbPaginado');
                //let divi = tamanios.split(",");
                num = parseInt(tamanios);
                tamanios.forEach((value) => {
                    let opcion = document.createElement('option');
                    opcion.innerText = value;
                    opcion.setAttribute("value", value);
                    cmbPaginado.appendChild(opcion);
                });
                
                


		let total=0;
		

		let template=document.getElementById('tablas');

		let templateContent=template.content;
		let alte=0;
		let filas=0;
		let columnas=10;
		let tope=true;
		
		let promesa = this.path(`http://localhost:7070/MantenimientoWeb-web-1.0-SNAPSHOT/webresources/marca`);

		promesa.then(data=>{
			let cont=this.tabla(data,true,false,0,5);
			shadowRoot.appendChild(atras);
                        shadowRoot.appendChild(cmbPaginado);
			shadowRoot.appendChild(siguiente);
			shadowRoot.appendChild(cont);

		})

        siguiente.addEventListener('click', e=>{
        	
	        	let hijo=document.querySelector('tabla-wc').shadowRoot.querySelector('#micontainer');
	        	shadowRoot.removeChild(hijo);

	        	promesa.then(data=>{
	        		alte=alte+num;
				let cont=this.tabla(data,false,true,alte,num);
				
				shadowRoot.appendChild(cont);
				})
        
        })


        atras.addEventListener('click', e=>{
        	let hijo=document.querySelector('tabla-wc').shadowRoot.querySelector('#micontainer');
        	shadowRoot.removeChild(hijo);
        	promesa.then(data=>{
        		alte=alte-num;
			let cont=this.tabla(data,false,false,alte,num);
			

			shadowRoot.appendChild(cont);
		})
        })
        
        cmbPaginado.onchange = () => {
            let hijo=document.querySelector('tabla-wc').shadowRoot.querySelector('#micontainer');
            console.log(hijo);
             num = parseInt(cmbPaginado.options[cmbPaginado.selectedIndex].value);
             promesa.then(data=>{
                 alte=0;
                 //let cont;
                 //shadowRoot.appendChild(cont);
                 let cont = this.tabla(data,true,false,alte,num);

                 //let cont=this.tabla(data,false,false,alte);	
		shadowRoot.replaceChild(cont, hijo);
             })
             
             console.log(num);
            
        }
		
		var clone=document.importNode(templateContent, true);
		
		

		shadowRoot.appendChild(clone);
		
	}
        

	tabla(json,primero,sig,alterador, pag){
            let siguiente = document.querySelector('tabla-wc').shadowRoot.querySelector('#siguiente');
            let atras = document.querySelector('tabla-wc').shadowRoot.querySelector('#atras');
            let mostrar;
		let jsonObjects=json;
		if (primero==true) {
                    if(pag>=jsonObjects.length){
                        mostrar = jsonObjects.length;
                        this.total=jsonObjects.length;
			this.filas=jsonObjects.length;
                    }else{
                        mostrar = jsonObjects.length-pag;
                        this.total=jsonObjects.length;
			this.total=this.total-pag;
			this.filas=jsonObjects.length-mostrar;
                    }			
			
			
		}else if(sig==true){

		        this.filas=this.filas+pag;	
                        atras.disabled = false;
			if (this.filas===jsonObjects.length) {
                            siguiente.disabled = true;
			}
                        
		}else if (sig==false) {
			this.filas=this.filas-pag;
                        siguiente.disabled = false;
                        if(this.filas === pag){
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
