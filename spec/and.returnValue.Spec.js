describe("Spies - Função 'and.returnValue'- Validar o retorno do valor simulado'", function(){
    
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
    
        it("deve retornar 10 para o método 'Somar'", function(){
            expect(calculadora.somar(5,2)).toEqual(10);
        });

        it("deve chamar ao menos 1x o método 'Somar'", function(){
            expect(calculadora.somar).toHaveBeenCalled();
        });
    });