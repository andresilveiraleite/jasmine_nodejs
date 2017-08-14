describe("Função Global Jasmine - 'beforeEach'", function(){
    var contador = 0;
    beforeEach(function(){  // Antes de cada Teste ser realizado iremos adicionar ao contador + 1
        contador++;  
    });

    it("deve validar o Incremento do Contador = 1", function(){
        expect(contador).toEqual(1);        // 
    })
    
    it("deve validar o Incremento do Contador = 2", function(){
        expect(contador).toEqual(2);        // 
    })
})