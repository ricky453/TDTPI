describe("Vamos a testear si existen los webcomponentes en el dom",async()=>{

	describe("Verificaremos si existe navegador-wc",async()=>{
		it("Si devuelve true es porque existe",async()=>{
			let navegador=document.querySelector('navegador-wc');
			chai.assert.isObject(navegador,'El componente esta creado');
		});
	});

	describe("Verificaremos si existe tabla-wc",async()=>{
		it("Si devuelve true es porque existe",async()=>{
			let tabla=document.querySelector('tabla-wc');
			if (document.querySelector('tabla-wc') !== 'undefined') {
				console.log('definidon');
			}

			chai.assert.isTrue(tabla,'El componente esta creado');
		});
	});

});