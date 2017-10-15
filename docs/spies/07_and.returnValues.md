# and.returnValues
## Informa ao Spy quais os valores a serem retornados por chamada ao método. É muito utilizado para simular o retorno de um valor de um banco de dados por exemplo. Aceita como parâmetro 1 ou mais valores. É importante citar que ele permite múltiplos valores por chamada, ou seja, se tivermos os parâmetros = 10, 20 e validarmos na 1x se recebemos 10 e na 2x recebemos 20 = OK. Se realizarmos uma nova validação, receberemos "undefined", pois não "simulados um 3 valor.

### Deve ser aplicado no objeto spy e não no expect (testes)

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'and.returnValues'", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar").and.returnValue(10, 20); 
    });

    it("deve validar o uso da função 'and.returnValues'", function(){
        expect(calculadora.somar(5,2)).toEqual(10);     // Validar se retornou 10 = ok
        expect(calculadora.somar(5,2)).toEqual(20);     // Validar se retornou 20 = ok
        expect(calculadora.somar(5,2)).toBeUndefined(); 
        // Como os parâmetros não pertencem ao fixado pela função, será retornado "undefined"

        expect(calculadora.somar).toHaveBeenCalledTimes(3); // Validar se o método somar foi chamado 3 x = OK.
    });
});
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  
