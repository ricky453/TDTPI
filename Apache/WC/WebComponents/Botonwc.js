class Botonwc extends HTMLElement{

	constructor(){
		super();
                this._shadowRoot = this.attachShadow({mode:'open'});
                
	}

	connectedCallback(){
                //botones
		let guardar=document.createElement('button');
		guardar.innerText='Guardar cambios';
		guardar.setAttribute('id', 'guardar');
                

                
                let template=document.getElementById('tablas');
		let templateContent=template.content;
                
                this._shadowRoot.appendChild(guardar);  
                
                guardar.addEventListener('click', e=>{

            
                });

		var clone=document.importNode(templateContent, true);
		this._shadowRoot.appendChild(clone);
	}
 
}

customElements.define('boton-wc', Botonwc);
export default Botonwc;