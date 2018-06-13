class Menuwc extends HTMLElement{

    constructor(){
        super();
                this._shadowRoot = this.attachShadow({mode:'open'});
    }

    connectedCallback(){

        let template=document.getElementById('menu');
		let templateContent=template.content;
		var clone=document.importNode(templateContent, true);
		this._shadowRoot.appendChild(clone);

        //menu
        let nav=document.createElement('nav');
        nav.setAttribute('id', 'minav')
        let ulMenu=document.createElement('ul')
        ulMenu.setAttribute('class', 'menu');
        nav.appendChild(ulMenu);
        let liMenuEquipo=document.createElement('li');
        let aMenuEquipo=document.createElement('a');
        aMenuEquipo.setAttribute('href','#');
        aMenuEquipo.innerText='Equipo';
        liMenuEquipo.appendChild(aMenuEquipo);

        let ulEquipo=document.createElement('ul');
        let liEquipo=document.createElement('li');
        let aEquipo=document.createElement('a');
        aEquipo.setAttribute('href','./equipo.html');
        aEquipo.innerText='Equipo';
        liEquipo.appendChild(aEquipo);
        ulEquipo.appendChild(liEquipo);
     

        let liMarca=document.createElement('li');
        let aMarca=document.createElement('a');
        aMarca.setAttribute('href','./index.html');
        aMarca.innerText='Marca';
        liMarca.appendChild(aMarca);
        ulEquipo.appendChild(liMarca);

        let liModelo=document.createElement('li');
        let aModelo=document.createElement('a');
        aModelo.setAttribute('href','./modelo.html');
        aModelo.innerText='Modelo';
        liModelo.appendChild(aModelo);
        ulEquipo.appendChild(liModelo);

        let liDetalleEquipo=document.createElement('li');
        let aDetalleEquipo=document.createElement('a');
        aDetalleEquipo.setAttribute('href','./detalleEquipo.html');
        aDetalleEquipo.innerText='Detalle Equipo';
        liDetalleEquipo.appendChild(aDetalleEquipo);
        ulEquipo.appendChild(liDetalleEquipo);

        liMenuEquipo.appendChild(ulEquipo);
        ulMenu.appendChild(liMenuEquipo);

        let liMenuCalendario=document.createElement('li');
        let aMenuCalendario=document.createElement('a');
        aMenuCalendario.setAttribute('href','#');
        aMenuCalendario.innerText='Calendario';
        liMenuCalendario.appendChild(aMenuCalendario);

        let ulCalendario=document.createElement('ul');
        let liCalendario=document.createElement('li');
        let aCalendario=document.createElement('a');
        aCalendario.setAttribute('href','./calendario.html');
        aCalendario.innerText='Calendario';
        liCalendario.appendChild(aCalendario);
        ulCalendario.appendChild(liCalendario);
     

        let liAsueto=document.createElement('li');
        let aAsueto=document.createElement('a');
        aAsueto.setAttribute('href','./asuetos.html');
        aAsueto.innerText='Asueto';
        liAsueto.appendChild(aAsueto);
        ulCalendario.appendChild(liAsueto);

        liMenuCalendario.appendChild(ulCalendario);
        ulMenu.appendChild(liMenuCalendario);

        let liMenuMantenimiento=document.createElement('li');
        let aMenuMantenimiento=document.createElement('a');
        aMenuMantenimiento.setAttribute('href','#');
        aMenuMantenimiento.innerText='Mantenimiento';
        liMenuMantenimiento.appendChild(aMenuMantenimiento);

        let ulMantenimiento=document.createElement('ul');
        let liMantenimiento=document.createElement('li');
        let aMantenimiento=document.createElement('a');
        aMantenimiento.setAttribute('href','./detalleMantenimiento.html');
        aMantenimiento.innerText='Detalle Mantenimiento';
        liMantenimiento.appendChild(aMantenimiento);
        
        let ulEstadoDetalleMantenimiento=document.createElement('ul');
        let liEstadoDetalleMantenimiento=document.createElement('li');
        let aEstadoDetalleMantenimiento=document.createElement('a');
        aEstadoDetalleMantenimiento.setAttribute('href','./estadoDetalleMantenimiento.html');
        aEstadoDetalleMantenimiento.innerText='Estado Detalle Mantenimiento';
        liEstadoDetalleMantenimiento.appendChild(aEstadoDetalleMantenimiento);
        ulEstadoDetalleMantenimiento.appendChild(liEstadoDetalleMantenimiento);

        liMantenimiento.appendChild(ulEstadoDetalleMantenimiento);
        ulMantenimiento.appendChild(liMantenimiento);

        let liTipoMantenimiento=document.createElement('li');
        let aTipoMantenimiento=document.createElement('a');
        aTipoMantenimiento.setAttribute('href','./tipoMantenimiento.html');
        aTipoMantenimiento.innerText='Tipo Mantenimiento';
        liTipoMantenimiento.appendChild(aTipoMantenimiento);
        ulMantenimiento.appendChild(liTipoMantenimiento);

        liMenuMantenimiento.appendChild(ulMantenimiento);
        ulMenu.appendChild(liMenuMantenimiento);

        let liMenuDiagnostico=document.createElement('li');
        let aMenuDiagnostico=document.createElement('a');
        aMenuDiagnostico.setAttribute('href','#');
        aMenuDiagnostico.innerText='Diagnostico';
        liMenuDiagnostico.appendChild(aMenuDiagnostico);

        let ulDiagnostico=document.createElement('ul');
        let liDiagnostico=document.createElement('li');
        let aDiagnostico=document.createElement('a');
        aDiagnostico.setAttribute('href','./diagnostico.html');
        aDiagnostico.innerText='Diagnostico';
        liDiagnostico.appendChild(aDiagnostico);
        ulDiagnostico.appendChild(liDiagnostico);

        let liDiagnosticoParte=document.createElement('li');
        let aDiagnosticoParte=document.createElement('a');
        aDiagnosticoParte.setAttribute('href','./diagnosticoParte.html');
        aDiagnosticoParte.innerText='Diagnostico Parte';
        liDiagnosticoParte.appendChild(aDiagnosticoParte);
        ulDiagnostico.appendChild(liDiagnosticoParte);

        let liPasos=document.createElement('li');
        let aPasos=document.createElement('a');
        aPasos.setAttribute('href','./pasos.html');
        aPasos.innerText='Pasos';
        liPasos.appendChild(aPasos);
        ulDiagnostico.appendChild(liPasos);

        let liProcedimiento=document.createElement('li');
        let aProcedimiento=document.createElement('a');
        aProcedimiento.setAttribute('href','./procedimiento.html');
        aProcedimiento.innerText='Procedimiento';
        liProcedimiento.appendChild(aProcedimiento);
        ulDiagnostico.appendChild(liProcedimiento);

        liMenuDiagnostico.appendChild(ulDiagnostico);
        ulMenu.appendChild(liMenuDiagnostico);

        let liMenuTrabajadores=document.createElement('li');
        let aMenuTrabajadores=document.createElement('a');
        aMenuTrabajadores.setAttribute('href','#');
        aMenuTrabajadores.innerText='Trabajadores';
        liMenuTrabajadores.appendChild(aMenuTrabajadores);

        let ulTrabajadores=document.createElement('ul');
        let liTrabajadores=document.createElement('li');
        let aTrabajadores=document.createElement('a');
        aTrabajadores.setAttribute('href','./trabajadores.html');
        aTrabajadores.innerText='Trabajadores';
        liTrabajadores.appendChild(aTrabajadores);
        ulTrabajadores.appendChild(liTrabajadores);

        let liCargo=document.createElement('li');
        let aCargo=document.createElement('a');
        aCargo.setAttribute('href','./cargo.html');
        aCargo.innerText= 'Cargo';
        liCargo.appendChild(aCargo);
        ulTrabajadores.appendChild(liCargo);

        liMenuTrabajadores.appendChild(ulTrabajadores);
        ulMenu.appendChild(liMenuTrabajadores);

        let liMenuOrdenTrabajo=document.createElement('li');
        let aMenuOrdenTrabajo=document.createElement('a');
        aMenuOrdenTrabajo.setAttribute('href','#');
        aMenuOrdenTrabajo.innerText='Orden de Trabajo';
        liMenuOrdenTrabajo.appendChild(aMenuOrdenTrabajo);

        let ulOrdeTrabajo=document.createElement('ul');
        let liOrdenTrabajo=document.createElement('li');
        let aOrdenTrabajo=document.createElement('a');
        aOrdenTrabajo.setAttribute('href','./ordenTrabajo.html');
        aOrdenTrabajo.innerText='Orden de Trabajo';
        liOrdenTrabajo.appendChild(aOrdenTrabajo);
        ulOrdeTrabajo.appendChild(liOrdenTrabajo);

        let liOrdeTrabajoTrabajadores=document.createElement('li');
        let aOrdenTrabajoTrabajadores=document.createElement('a');
        aOrdenTrabajoTrabajadores.setAttribute('href','./ordenTrabajoPorTrabajadores.html');
        aOrdenTrabajoTrabajadores.innerText= 'Orden de Trabajo por Trabajadores';
        liOrdeTrabajoTrabajadores.appendChild(aOrdenTrabajoTrabajadores);
        ulOrdeTrabajo.appendChild(liOrdeTrabajoTrabajadores);

        let liSolicitud=document.createElement('li');
        let aSolicitud=document.createElement('a');
        aSolicitud.setAttribute('href','./solicitud.html');
        aSolicitud.innerText= 'Solicitud';
        liSolicitud.appendChild(aSolicitud);
        ulOrdeTrabajo.appendChild(liSolicitud);

        liMenuOrdenTrabajo.appendChild(ulOrdeTrabajo);
        ulMenu.appendChild(liMenuOrdenTrabajo);

        this._shadowRoot.appendChild(nav);

     }
}

customElements.define('menu-wc', Menuwc);
export default Menuwc;