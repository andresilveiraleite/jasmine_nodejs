# toHaveBeenCalled
## Informa se um método do spy foi executado ao menos 1 x
### Não possui parâmetros (booleano) e serve apenas para nos informar se houve retorno ou não de uma chamada. *** Serve para confirmar se um método foi executado ou não.

Exemplo:

```js
describe("Spies - Mock Object - Validar o uso do 'toHaveBeenCalled'", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve validar o uso do 'toHaveBeenCalled'", function(){
        calculadora.somar(1,1);
        expect(Calculadora.somar).toHaveBeenCalled(); 
        // verifica se realmente o método 'somar' foi chamado
    });
});
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  


