describe("Spies - Função 'calls.allArgs' - Validar todas as chamadas SPY", function() {
    
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
    
        it("deve validar o uso da função 'calls.allArgs'", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            
            expect(calculadora.somar.calls.allArgs())
                .toEqual([[1,1], [2,2]]);
             // Validamos todas as chamadas ao método spy. se tivéssemos várias chamadas poderíamos criar uma estrutura
             //de repetição "for" e ir validando 1 a 1.
        });
});
