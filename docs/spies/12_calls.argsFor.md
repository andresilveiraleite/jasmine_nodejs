# calls.argsFor
## Armazena e retorna uma lista (Array) contendo os parâmetros utilizados em cada chamada do método Spy.
### É bastante útil para validar se um método foi chamado com os parâmetros corretos. Recebe como parâmetro o índice da chamada a ser retornada.
#### Essa função é bem parecida com a "toHaveBeenCalledWith" que também valida quais parâmetros foram passados. A diferença é que no caso do call.argsFor ele mantém uma lista (array) com todas as chamadas e pede o parâmetro que existe nesse array, no caso do 1 parâmetro = 0 e assim por diante.


Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.argsFor", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    it("deve validar o uso da função 'calls.argFor'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
        calculadora.somar(2,2); // 2 Chamada ao método Spy Somar passando os parâmetros 2,2
        
        expect(calculadora.somar.calls.argsFor(0)).toEqual([1,1]);
         // Validamos se os parâmetros foram 1,1 no array.
        
        expect(calculadora.somar.calls.argsFor(1)).toEqual([2,2]); 
        // Validamos se os parâmetros foram 2,2 no array.
    });
});
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  
 