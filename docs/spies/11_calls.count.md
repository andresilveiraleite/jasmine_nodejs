# calls.count
## Armazena e retorna o número de vezes que um método Spy foi chamado
### Não possui parâmetros e retorna o número de chamadas ao método Spy

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.any", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    it("deve validar o uso da função 'calls.count'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar
        calculadora.somar(2,2); // 2 Chamada ao método Spy Somar
        expect(calculadora.somar.calls.count()).toEqual(2); // Validamos se foi realmente chamado 2X
    });
});
```


