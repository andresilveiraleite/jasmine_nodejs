describe("Spies - Função 'and.throwError'- Validar retorno tratado de mensagem de Erro'", function(){
    
        var calculadora = {
            somar: function(n1, n2) {
                return n1 + n2;
            },
            subtrair: function(n1, n2) {
                return n1 - n2;
            }
        };
    
        beforeAll(function() {
            spyOn(calculadora, "somar").and.throwError("Valores Inválidos");
            spyOn(calculadora, "subtrair");
        });
    
        it("deve exibir um erro ao Somar'", function(){
            expect(function() {calculadora.somar(200,300); }).toThrowError("Valores Inválidos");
             // Aqui forçamos um erro e determinados uma mensagem de erro
            
        });
});