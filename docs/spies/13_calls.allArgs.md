# calls.allArgs
## Retorna uma lista com todas as chamadas aos métodos SPY
### Ele não recebe nenhum argumento como parâmetro. Prefira utilizar a função "calls.argsFor" quando precisar verificar um item em específico.

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.allArgs", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    it("deve validar o uso da função 'calls.allArgs'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
        calculadora.somar(2,2); // 2 Chamada ao método Spy Somar passando os parâmetros 2,2
        
        expect(calculadora.somar.calls.allArgs()).toEqual([1,1], [2,2]);
         // Validamos se os parâmetros foram 1,1 e 2,2 das chamadas ao método SPY (pois essa função recebe todas as chamadas)
    });
});
``` 

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  