//import AbstractResourceClient from './AbstractResourceClient.js';
//class MarcaResourceClientTest{


import MarcaResourceClient from "../Controller/MarcaResourceClient.js";
let marcaRc=new MarcaResourceClient();
//var assert=require("chai").assert;

describe("Vamos a testear MarcaResourceClient ahre",async ()=>{

	describe("Vamos a testear el metodo imprimir",async ()=>{

		it("Debe de volver hola ahre",async ()=>{
			let resultado=marcaRc.imprime();
			chai.assert.equal(resultado,"hola");
			console.log(resultado);
		});
	});

	describe("Vamos a testear el metodo findAll ahre ",async()=>{

		it("debe de devolver una promesa",async()=>{
			let promesa=await marcaRc.findAll();
			console.log(promesa);
			chai.assert.equal(promesa.status,200);

			let objetos=await promesa.json();
			chai.assert.isArray(objetos);
			console.log(objetos);
		});
	});

	describe("Vamos a testear el metodo count ahre ",async()=>{

		it("debe de devolver una promesa",async()=>{
			let contador=await marcaRc.count();
			console.log(contador.status);

			let miCont=await contador.json();
			chai.assert.isNumber(miCont);
			console.log(miCont);
		});
	});

	describe("Vamos a testear el metodo findRange ahre ",async()=>{

		it("debe de devolver una promesa",async()=>{
			let rango=await marcaRc.findRange(5,10);
			console.log(rango.status);

			let numero=await rango.json();
			chai.assert.isArray(numero);
			let cantidad=0;
			for(let i=0;i<numero.length;i++){
                  cantidad++;
			}

			chai.assert.equal(cantidad,10);

			console.log(cantidad);
		});
	});

	describe("Vamos a testear el metodo edit ahre ",async()=>{

		it("debe de actualizar",async()=>{
			let promesa=await fetch('http://localhost:7070/MantenimientoWeb-web-1.0-SNAPSHOT/webresources/marca');
			let objson=await promesa.json();

			let xmlht=marcaRc.edit(objson);
			chai.assert.equal(promesa.status,200);
		});
	});

});

//}