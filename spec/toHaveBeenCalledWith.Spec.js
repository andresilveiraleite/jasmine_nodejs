describe("Spies - Função 'toHaveBeenCalledWith' - Validar os valores da chamada do método do spy ", function(){
    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeAll(function() {
        spyOn(calculadora, "somar");
    });

    it("deve validar o uso do 'toHaveBeenCalledWith'", function(){
        calculadora.somar(1,1);
        calculadora.somar(2,2);
        expect(calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(calculadora.somar).toHaveBeenCalledWith(2,2);
    });
});


