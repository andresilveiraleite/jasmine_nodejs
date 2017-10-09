# and.callFake
## Define uma nova implementação para um método de um Spy. Recebe como parâmetro uma função com a nova implementação a ser executada quando o método for chamado
### Deve ser aplicado no objeto spy e não no expect (testes)

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'and.callFake'", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar").and.callFake(
            function(n1,n2) {
                return n1 * n2;
        });
    });

    it("deve validar o uso da função 'and.callFake'", function(){
        expect(calculadora.somar(5,2)).toEqual(10);    
         // Validar se retornou 10 = ok pois criamos uma chamada fake de multiplicação dos valores, logo 5*2 =10
        expect(calculadora.somar).toHaveBeenCalled(); // Validar se o método somar foi chamado 1x
    });
});
```