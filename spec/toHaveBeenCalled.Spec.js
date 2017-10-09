describe("Spies - toHaveBeenCalled - Validar se um método foi chamado ao menos 1 x", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve não chamar o método somar e validar se não foi chamado", function(){
        expect(Calculadora.somar).not.toHaveBeenCalled();// Validando se o método não foi chamado.
    });

    it("Deve chamar o método somar e validar se foi chamado", function(){
        Calculadora.somar(1,1);  // Método Somar chamado.
        expect(Calculadora.somar).toHaveBeenCalled();// Validando se o método foi chamado .
    });
});


