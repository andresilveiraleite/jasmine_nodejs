describe("Spies - Função 'calls.first' - Validar retorno da 1 chamada a um método do SPY.", function() {
    
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
        //Antes de tudo atribuo o retorno do valor =10.

        it("deve validar o uso da função 'calls.first' validando o Objeto", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.first();  
            // Atribuo a varíavel retorno a  1 informação de chamada do objeto/método "somar" = '1,1'

            expect(retorno.object).toEqual(calculadora);
            //Validamos se na 1 posição existe um objeto "CALCULADORA"
            
        });

        it("deve validar o uso da função 'calls.first' validando os Argumentos", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.first();  
            // Atribuo a varíavel retorno a  1 informação de chamada do objeto/método "somar" = '1,1'
            

            expect(retorno.args).toEqual([1,1]);
            //Validamos se realmente pegamos a 1 posição do array = 1,1

        });

        it("deve validar o uso da função 'calls.first' validando o retorno do valor da Soma definido como 10 no beforeall", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            var retorno = calculadora.somar.calls.first();  
            // Atribuo a varíavel retorno a 1 informação de chamada do objeto/método "somar".

            expect(retorno.returnValue).toEqual(10);
            //Validamos se a soma o retorno do valor = 10
        });
});