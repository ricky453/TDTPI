class Navegadorwc extends HTMLElement{

	constructor(){
		super();
                this._shadowRoot = this.attachShadow({mode:'open'});
                this._low=0;
                this._high=5;
                this._count=0;
                this._pagina=1;
                
	}

	connectedCallback(){
                //botones
              
		let atras=document.createElement('button');
		atras.innerText='<';
		atras.setAttribute('id', 'atras');
		let siguiente=document.createElement('button');
                siguiente.setAttribute('id', 'siguiente');
		siguiente.innerText='>';
		let ultimo=document.createElement('button');
                ultimo.innerText='>>';
                ultimo.setAttribute('id','ultimo');
		let primero=document.createElement('button');
                primero.innerText='<<';
                primero.setAttribute('id','primero');
                atras.disabled = true;
                primero.disabled = true;
                
                let num = 5;

                if(this._count===num){
                    siguiente.disabled = true;
                    ultimo.disabled = true;
                }else{
                    siguiente.disabled = false;
                    ultimo.disabled = false;
                }
                let template=document.getElementById('tablas');
		let templateContent=template.content;
                
                //lista
                
                let tamanios = ["5", "10", "25", "50", "100"];
                let cmbPaginado = document.createElement('select');
                cmbPaginado.setAttribute('id','cmbPaginado');
                num = parseInt(tamanios);
                tamanios.forEach((value) => {
                    let opcion = document.createElement('option');
                    opcion.innerText = value;
                    opcion.setAttribute("value", value);
                    cmbPaginado.appendChild(opcion);
                });
                
                this._shadowRoot.appendChild(primero);
		this._shadowRoot.appendChild(atras);
                this._shadowRoot.appendChild(cmbPaginado);
		this._shadowRoot.appendChild(siguiente);
                this._shadowRoot.appendChild(ultimo);
                
        siguiente.addEventListener('click', e=>{
            num = parseInt(cmbPaginado.options[cmbPaginado.selectedIndex].value);
            this._low = this._low + num;
            this._high = num;
            this._pagina = this._pagina +1;
            let paginas = parseInt(this._count/num);
            let extra = parseInt(this._count%num);
            if(extra!==0){
                paginas = paginas+1;
            }
            if(paginas === this._pagina){
                siguiente.disabled = true;
                ultimo.disabled = true;
            }
            atras.disabled = false;
            primero.disabled = false;
            //console.log("pagina "+this._pagina + " de "+paginas);
        	        
        });


        atras.addEventListener('click', e=>{
            num = parseInt(cmbPaginado.options[cmbPaginado.selectedIndex].value);
            this._low = this._low - num;
            this._high = num;
            this._pagina = this._pagina-1;
            let paginas = parseInt(this._count/num);
            let extra = parseInt(this._count%num);
            if(extra!==0){
                paginas = paginas+1;
            }
            if(this._pagina === 1){
                atras.disabled = true;
                primero.disabled = true;
            }
            siguiente.disabled = false;
            ultimo.disabled = false;
            //console.log("pagina "+this._pagina + " de "+paginas);
            
        });
        
        cmbPaginado.onchange = () => {
            num = parseInt(cmbPaginado.options[cmbPaginado.selectedIndex].value); 
            if(this._count<=num){
                siguiente.disabled = true;
                ultimo.disabled = true;
            }else{
                siguiente.disabled = false;
                ultimo.disabled = false;
            }
            primero.disabled = true;
            atras.disabled=true;
            this._low = 0;
            this._high = num;
            this._pagina = 1;

        };
        ultimo.addEventListener('click', e=>{
            num = parseInt(cmbPaginado.options[cmbPaginado.selectedIndex].value);

            let paginas = parseInt(this._count/num);
            let extra = parseInt(this._count%num);
            if(extra!==0){
                paginas = paginas+1;
            }
            this._pagina = paginas;
            this._low = num*(paginas-1);
            this._high = this._count;
            atras.disabled = false;
            primero.disabled = false;

            siguiente.disabled = true;
            ultimo.disabled = true;
            //console.log("pagina "+this._pagina + " de "+paginas);

        });
        primero.addEventListener('click', e=>{
            num = parseInt(cmbPaginado.options[cmbPaginado.selectedIndex].value);
            let paginas = parseInt(this._count/num);
            let extra = parseInt(this._count%num);
            if(extra!==0){
                paginas = paginas+1;
            }
            this._pagina = 1;
            this._low = 0;
            this._high = num;
            atras.disabled = true;
            primero.disabled = true;
            siguiente.disabled = false;
            ultimo.disabled = false;
            //console.log("pagina "+this._pagina + " de "+paginas);
        });
		var clone=document.importNode(templateContent, true);
		this._shadowRoot.appendChild(clone);
	}
        setHigher(high){
           this._high = high;
        }
        getHigher(){
           return this._high;
        }
        setLower(low){
           this._low = low;
        }
        getLower(){
           return this._low;
        }
        getCount(count){
            this._count = count;
        }
        setTabla(data){
            this._tabla = data;
        }
        definirTabla(){
            var tabla = document.querySelector("tabla-wc");
            tabla.modificarTabla(this._tabla);

        }
}

customElements.define('navegador-wc', Navegadorwc);
export default Navegadorwc;