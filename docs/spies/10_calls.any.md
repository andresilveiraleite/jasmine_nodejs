# calls.any
## Todo Spy contém o atributo 'calls', com informações sobre suas chamadas.
### Serve para indicar se o método Spy foi chamado ao menos 1 x
#### Não recebe parâmetros e retorna um valor booleano se ocorreu ou não uma chamada ao método do Spy

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

    it("deve validar o uso da função 'calls.any'", function(){
        expect(calculadora.somar.calls.any()).toBeFalsy(); 
        // Chamada ao método ainda não foi feita, logo o retorno é falso.
        
        calculadora.somar(1,1); // Chamada ao método Spy 
        expect(calculadora.somar.calls.any()).toBeTruthy(); // Retorno é true.
    });
});
```


