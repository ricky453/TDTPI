
class DetallesMarca extends HTMLElement{

	constructor(){
		super();
	}

	connectedCallback(){

		let shadowroot=this.attachShadow({mode: 'open'});
		let detallesM=new Array();

		let contenedor=document.createElement('div');
		contenedor.setAttribute('id', 'contenedor');

		let areadetalles=document.createElement('p');
		areadetalles.style.width="300px";
		areadetalles.style.height="20px";
		// areadetalles.style.background = "#BD3C3C";
		areadetalles.setAttribute('id', 'detalles');
		// areadetalles.setAttribute("innerHTML","holaaaa");
		areadetalles.innerHTML=this.getJsonArea();



		contenedor.appendChild(areadetalles);

		shadowroot.appendChild(contenedor);

	}

	setJsonArea(json){
		
		this.detallesM=json;

		// this.areadetalles.innerHTML=detallesM;
		// this.contenedor.appendChild(areadetalles);
		// this.areadetalles.setAttribute('class', 'hola');
		console.log(this.detallesM);
	}

	getJsonArea(){
		return this.detallesM;
	}


}

customElements.define('detalles-marca',DetallesMarca);