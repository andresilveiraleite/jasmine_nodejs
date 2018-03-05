describe("Spies - Função 'calls.mosRecent' - Validar retorno da última chamada a um método do SPY.", function() {
    
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
        it("deve validar o uso da função 'calls.mostRecent' validando o Objeto", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.mostRecent();  
            // Atribuo a varíavel retorno a mais recente informação do objeto/método "somar" = 2,2.

            expect(retorno.object).toEqual(calculadora); // Não é necessário mencionar a posição do array, pois sempre pegaremos o último.
            //Validamos se na útlima posição existe um objeto "CALCULADORA"
        });

        it("deve validar o uso da função 'calls.mostRecent' validando os Argumentos", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.mostRecent();  
            // Atribuo a varíavel retorno todas as informações de chamadas do objeto/método "somar".

            expect(retorno.args).toEqual([2,2]);
            //Validamos se no array na última posição existem os argumentos 2,2.

            expect(retorno.args).toEqual([2,2]);
            //Validamos se no array na última posição existem os argumentos 2,2.
        });

        it("deve validar o uso da função 'calls.mostRecent' validando o retorno do valor da Soma definido como 10", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.mostRecent();  
            // Atribuo a varíavel retorno a última informação de chamada do objeto/método "somar".

            expect(retorno.returnValue).toEqual(10);
            //Validamos se a soma o retorno do valor = 10 -- Definido no beforeAll.
        });
});