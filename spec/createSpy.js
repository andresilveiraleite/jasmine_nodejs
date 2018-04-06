describe("Validar objeto jasmine.createSpy", function(){
    
    describe("Spies - Mock Object - Validar o uso do 'createSpy", function(){

        var somar;

        beforeAll(function(){
            somar = jasmine.createSpy("somar");
        });
        

        it("deve validar o uso do objeto 'jasmine.createSpy' - Validar se o objeto foi chamado ao menos 1X", function(){
            somar(1,2);
            expect(somar).toHaveBeenCalled();  //Validar se o objeto foi chamado ao menos 1 x
        });

        
        it("deve validar o uso do objeto 'jasmine.createSpy' - Validar os parâmetros chamados", function(){
            somar(1,2);
            expect(somar).toHaveBeenCalledWith(1,2); // Validar os parâmetros chamados
        });

        it("deve validar o uso do objeto 'jasmine.createSpy' - Validar se na 1 posição do array temos o valor = 1.", function(){
            somar(1,2);
            expect(somar.calls.mostRecent().args[0]).toEqual(1); // Validar se na 1 posição do array temos o valor = 1.
        });
        
    });
});

