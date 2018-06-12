import DiagnosticoParteResourceClient from '../Resources/DiagnosticoParteResourceClient.js';

var navegador = document.querySelector("navegador-wc");
let mrc = new DiagnosticoParteResourceClient();


window.onload = function () {
    
    mrc.count().then((r)=>{
        return r.json();}).then((data)=>{
        navegador.getCount(data);
    });
    
   
    mrc.findRange(navegador.getLower(), navegador.getHigher()).then((response) => {
        return response.json();
    })
        .then((data) => {
            var tabla = document.querySelector("tabla-wc");
            tabla.definirTabla(data);
            navegador.setTabla(data);

        });
    };

    let paginado = navegador._shadowRoot.querySelector('#cmbPaginado');
    
//    paginado.onchange = () =>  {
//    let num = paginado.options[paginado.selectedIndex].value;
//    mrc.findRange(0, num).then((response) => {
//        return response.json();
//    })
//        .then((data) => {
//            navegador.setTabla(data);
//            navegador.definirTabla(true, false, 0, num, false);
//
//        });
//    };
    
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