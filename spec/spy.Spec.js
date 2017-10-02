describe("Teste do objeto spyOn", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve Possuir o método somar como não definido", function(){
        expect(Calculadora.somar(1,1)).toBeUndefined(); // Como o spyon não foi implementado, retornará "Indefinido" 
    });
});


