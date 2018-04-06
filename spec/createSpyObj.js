describe("Validar objeto jasmine.createSpyObj", function() {
    
        var calculadora;

        beforeAll(function() {
            calculadora = jasmine.createSpyObj("calculadora", ["somar", "subtrair"]); 
            //Esse objeto recebe 2 parametro: 1: Nome do objeto e 2: Um array contendo os nomes dos métodos (Quantos forem necessários).

            //A partir da criação desse objeto, podemos adicionar funcionalidades como por ex.:
            calculadora.somar.and.returnValue(5);

        });
        
        
        it("deve validar o uso do objeto 'jasmine.createSpyObj' - Validar Se o objeto foi chamado ao menos 1X", function(){
            var retorno = calculadora.somar(1,2);
            expect(calculadora.somar).toHaveBeenCalled();  //Validar se o objeto foi chamado ao menos 1 x
        });

        
        it("deve validar o uso do objeto 'jasmine.createSpyObj' - Validar os parâmetros chamados", function(){
            var retorno = calculadora.somar(1,2);
            expect(calculadora.somar).toHaveBeenCalledWith(1,2); // Validar os parâmetros chamados
        });

        it("deve validar o uso do objeto 'jasmine.createSpyObj' - Validar se na 1 posição do array temos o valor = 1.", function(){
            var retorno = calculadora.somar(1,2);
            expect(retorno).toEqual(5); // Validar o valor de retorno que atribuímos no beforeAll
        });
        
    });


