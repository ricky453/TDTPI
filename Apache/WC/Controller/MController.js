import MarcaResourceClient from './MarcaResourceClient.js';


var tabla = document.querySelector("tabla-wc");
var navegador = document.querySelector("navegador-wc");
let paginado = navegador._shadowRoot.querySelector('#cmbPaginado');

let mrc = new MarcaResourceClient();


window.onload = function () {
    
    mrc.count().then((r)=>{
        return r.json();}).then((data)=>{
        navegador.getCount(data);
    });
    
   
    mrc.findRange(navegador.getLower(), navegador.getHigher()).then((response) => {
        return response.json();
    })
        .then((data) => {
            tabla.definirTabla(data);
            navegador.setTabla(data);

        });
    };
    
    navegador.onclick = () =>  {
        mrc.findRange(navegador.getLower(), navegador.getHigher()).then((response) => {
            return response.json();
        })
            .then((data) => {
                navegador.setTabla(data);
                navegador.definirTabla();

            });
    };    
    
export default this;    
	
        
	


