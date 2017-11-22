describe("Spies - Função 'calls.all' - Validar retorno de todas as informações de chamadas de um método do SPY.", function() {
    
        var calculadora = {
            somar: function(n1, n2) {
                return n1 + n2;
            },

            subtrair: function(n1, n2) {
                return n1 - n2;
            }
        };
    
        beforeAll(function() {
            spyOn(calculadora, "somar").and.returnValue(10);
            spyOn(calculadora, "subtrair");
        });
        it("deve validar o uso da função 'calls.all' validando o Objeto", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.all();  
            // Atribuo a varíavel retorno todas as informações de chamadas do objeto/método "somar".

            expect(retorno[0].object).toEqual(calculadora);
            //Validamos se no array na 1 posição existe um objeto "CALCULADORA"
        });

        it("deve validar o uso da função 'calls.all' validando os Argumentos", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.all();  
            // Atribuo a varíavel retorno todas as informações de chamadas do objeto/método "somar".

            expect(retorno[0].args).toEqual([1,1]);
            //Validamos se no array na 1 posição existem os argumentos 1,1.

            expect(retorno[1].args).toEqual([2,2]);
            //Validamos se no array na 1 posição existem os argumentos 2,2.
        });

        it("deve validar o uso da função 'calls.all' validando o retorno do valor da Soma definido como 10", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.all();  
            // Atribuo a varíavel retorno todas as informações de chamadas do objeto/método "somar".

            expect(retorno[0].returnValue).toEqual(10);
            //Validamos se a soma o retorno do valor = 10 -- Definido na SOMA.
        });
});