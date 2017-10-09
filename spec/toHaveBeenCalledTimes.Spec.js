describe("Spies - toHaveBeenCalledTimes - Validar se um método foi chamado 2 x", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve não chamar o método somar e validar se não foi chamado", function(){
        expect(Calculadora.somar).not.toHaveBeenCalledTimes(1);// Validando se o método não foi chamado.
    });

    it("Deve chamar o método somar 2 e validar se foi chamado as 2x", function(){
        Calculadora.somar(1,1);  // Método Somar chamado a 1x.
        Calculadora.somar(2,2);  // Método Somar chamado a 2x.
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);// Validando se o método foi chamado 2x.
    });
});


