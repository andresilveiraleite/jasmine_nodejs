# and.CallThrough
## Informa ao Spy que o método original deve ser executado - Deve ser aplicado ao objeto Spy e não ao expect(testes)
### O método original será executado, e todos os recursos do spy serão mantidos e estarão disponpiveis para verificação

Exemplo:

```js
describe("Spies - Mock Object - Validar o uso do 'and.CallThrough'", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        };

        subtrair: function(n1, n2) {
            return n1 - n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar").and.CallThrough();
        spyOn(calculadora, "subtrair");
    });

    it("deve executar o método 'Somar' Original", function(){
        expect(calculadora.somar(1,1)).toEqual(2);
        expect(calculadora.subtrair(2,2)).toBeUndefined();
        expect(calculadora.somar).toHaveBeenCalledTimes(1)
    });
});
```