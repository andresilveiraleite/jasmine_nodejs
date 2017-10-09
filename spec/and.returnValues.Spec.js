describe("Spies - Função 'and.returnValues'- Validar os retornos dos valores simulados'", function(){
    
        var calculadora = {
            somar: function(n1, n2) {
                return n1 + n2;
            },
            subtrair: function(n1, n2) {
                return n1 - n2;
            }
        };
    
        beforeAll(function() {
            spyOn(calculadora, "somar").and.returnValues(20, 30);
            spyOn(calculadora, "subtrair");
        });
    
        it("deve retornar o valor da 1 chamada = 10 para o método 'Somar'", function(){
            expect(calculadora.somar(200,300)).toEqual(20);
        });

        
        it("deve retornar o valor da 2 chamada = 30 para o método 'Somar'", function(){
            expect(calculadora.somar(10,100)).toEqual(30);
        });

        it("deve retornar 'Undefined' para a 3 chamada(Pois não temos 3 parâmetros na função citada)", function(){
            expect(calculadora.somar(200,400)).toBeUndefined();
        });
    });