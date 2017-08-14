describe("Função Global Jasmine - 'beforeAll'", function(){
    var contador = 0;
    
    beforeAll(function(){
        contador = 10; 
    });
      
    beforeEach(function(){
        contador++; 
    });

    it("deve validar o Incremento do Contador = 11", function(){
        expect(contador).toEqual(11);
    });
    
    it("deve validar o Incremento do Contador = 12", function(){
        expect(contador).toEqual(12);
    });
})