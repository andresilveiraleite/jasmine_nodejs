describe("Função Global Jasmine - 'afterEach'", function(){
    
    
    var contador = 0;
    beforeEach(function(){  // Antes de cada Teste ser realizado iremos adicionar ao contador + 1
        contador++;  
    });

    afterEach(function(){  // Depois de cada Teste ser realizado iremos atribuir o valor 0 para o contador.
        contador = 0;  
    });

    it("deve validar o Incremento do Contador = 1", function(){
        expect(contador).toEqual(1);        // 
    })
    
    it("deve validar que o contador permanecerá = 1", function(){
        expect(contador).toEqual(1);        // 
    })
})