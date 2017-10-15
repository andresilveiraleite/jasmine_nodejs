describe("Spies - Função 'calls.argsFor' - Validar parâmetros da lista", function() {
    
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
    
        it("deve validar o uso da função 'calls.argsFor'", function() {
            calculadora.somar(1,1); // Soma de valor 1,1 -- Array de entrada 1 
            calculadora.somar(2,2); // Soma de valor 2,2 -- Array de entrada 2
            expect(calculadora.somar.calls.argsFor(0)).toEqual([1,1]); // Validamos se os parâmetros foram 1,1 no array [0].
            expect(calculadora.somar.calls.argsFor(1)).toEqual([2,2]); // Validamos se os parâmetros foram 2,2 no array [1].
        });
});
