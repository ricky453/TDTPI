import MarcaResourceClient from './MarcaResourceClient.js';


var tabla = document.querySelector("tabla-wc");
var navegador = document.querySelector("navegador-wc");
var guardar = document.querySelector("boton-wc");
//let paginado = tabla._shadowRoot.querySelector('#tabla');
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
    
    guardar.onclick = () =>  {
        var pepe = {
            "idMarca": '1',
            "marca": 'marca',
            "descripcion": 'DES',
            "activo": false
        };
        mrc.edit(pepe);  
    };

    
 
export default this;    
	
        
	


