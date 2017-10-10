describe("Spies - Função 'calls.count'- Validar se houve o retorno de quantas x um método do Spy foi chamado'", function(){
    
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
    
        it("deve exibir 2 chamadas ao método Spy'", function(){
            calculadora.somar(1,1); // 1 Chamada ao método Spy Somar
            calculadora.somar(2,2); // 2 Chamada ao método Spy Somar
            expect(calculadora.somar.calls.count()).toEqual(2); // Validamos se foi realmente chamado 2X
        });
});