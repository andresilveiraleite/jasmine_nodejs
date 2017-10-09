# and.throwError
## Deve informar ao Spy que o método deve lançar um erro ao ser executado. Recebe como parâmetro uma string contendo a mensagem de erro a ser lançada. É importante para deixar o rastreamento do erro claro e objetivo.
### ### Deve ser aplicado no objeto spy e não no expect (testes)

Exemplo:

```js

describe("Spies - Função 'and.throwError'- Validar o retorno da mensagem de erro simulada", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar").and.throwError(
            "Valores Inválidos");
    });

    it("deve validar o uso da função 'and.throwError'", function(){
        expect(function() {calculadora.somar(5,2);}).toThrowError("Valores Inválidos");
         // Aqui Validamos se será exibido a mensagem de erro forçada com a função citada
        expect(calculadora.somar).toHaveBeenCalled(); // Validar se o método somar foi chamado 1x
    });
});
```

