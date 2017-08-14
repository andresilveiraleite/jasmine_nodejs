describe("Função Global Jasmine - 'afterAll'", function(){
    var contador = 0;
    
    beforeAll(function(){
        contador = 10; 
    });
      
    afterAll(function(){
        contador = 0; 
    });

    it("deve validar o valor do Contador = 10", function(){
        expect(contador).toEqual(10);
    });
    
    it("deve manter valor do Contador = 10", function(){
        expect(contador).toEqual(10);
    });
})