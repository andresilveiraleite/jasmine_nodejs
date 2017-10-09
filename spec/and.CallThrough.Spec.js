describe("Spies - Função 'and.CallThrough' - Validar se irá executar o métdodo marcado pela função", function(){
    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        },

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar").and.callThrough();
        spyOn(calculadora, "subtrair");
    });

    it("deve executar o método 'Somar' Original' e validar o resultado", function(){
        expect(calculadora.somar(1,1)).toEqual(2);
    })

    it("deve ficar Undefined pois forçamos a executar apenas o método 'somar'", function(){
        expect(calculadora.subtrair(2,1)).toBeUndefined();
    })
});


