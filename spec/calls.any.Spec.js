describe("Spies - Função 'calls.any.'- Validar se ocorreu ou não uma chamada ao método Spy'", function(){
    
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
    
        it("deve exibir true para a chamada ao método Spy'", function(){
            calculadora.somar(1,1); 
            expect(calculadora.somar.calls.any()).toBeTruthy();
        });
});