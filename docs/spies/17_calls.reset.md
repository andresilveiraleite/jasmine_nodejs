# calls.reset
## É utilizado para limpar os dados das chamadas dos métodos de um SPY
### Muito útil para restaurar o valor padrão das chamadas

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.reset", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    it("deve validar o uso da função 'calls.reset'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
        expect(calculadora.somar.calls.any()).toBeTruthy(); // Como ainda não chamamos a função .reset, ainda temos parâmetros na função SOMAR.
        calculadora.somar.calls.reset(); // Nesse momento "Resetamos" todos os argumentos.
        expect(calculadora.somar.calls.any()).toBeFalsy(); // Nesse momento não temos mais argumentos, logo é falso.  
    
        
    });
});
```                                       



[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  