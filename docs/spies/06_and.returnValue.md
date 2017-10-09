# and.returnValue
## Informa ao Spy o valor de retorno de um deteminado método. É muito utilizado para simular o retorno de um valor de um banco de dados por exemplo.
### Deve ser aplicado no objeto spy e não no expect (testes)

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'and.returnValue'", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar").and.returnValue(10);
    });

    it("deve validar o uso da função 'and.returnValue'", function(){
        expect(calculadora.somar(5,2)).toEqual(10);
        expect(calculadora.somar).toHaveBeenCalled();
    });
});
```
