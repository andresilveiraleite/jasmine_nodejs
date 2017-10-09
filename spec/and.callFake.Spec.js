describe("Spies - Função 'and.callFake'- Validar a transformação do método 'Somar' para 'Subtrair'", function(){
    
        var calculadora = {
            somar: function(n1, n2) {
                return n1 + n2;
            },
            subtrair: function(n1, n2) {
                return n1 - n2;
            }
        };
    
        beforeAll(function() {
            spyOn(calculadora, "somar").and.callFake(function(n1,n2) {
                return n1 - n2;  // nesse momento tranformamos o método somar em subtrair
            });
            spyOn(calculadora, "subtrair");
        });
    
        it("deve transformar o método 'Somar' em 'Subtração'", function(){
            expect(calculadora.somar(10,5)).toEqual(5);
        });
    });