describe("Spies - Função 'calls.reset' - Validar retorno da 1 chamada a um método do SPY.", function(){
    
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

        it("deve validar o uso da função 'calls.reset'", function() {
            calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
            expect(calculadora.somar.calls.any()).toBeTruthy(); // Como ainda não chamamos a função .reset, ainda temos parâmetros na função SOMAR.
            calculadora.somar.calls.reset(); // Nesse momento "Resetamos" todos os argumentos.
            expect(calculadora.somar.calls.any()).toBeFalsy(); // Nesse momento não temos mais argumentos, logo é falso.                 
        });

});