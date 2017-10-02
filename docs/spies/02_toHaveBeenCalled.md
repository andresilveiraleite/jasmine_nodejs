# toHaveBeenCalled
## Informar se um método do spy foi executado ao menos 1 x
### Não possui parâmetros (booleano) e serve apenas para nos informar se houve retorno ou não de uma chamada. *** Serve para confirmar se um método foi executado ou não.


```js
describe("Spies - Mock Object - spyOn", function(){
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
        expect(Calculadora.somar(1,1)).toHaveBeenCalled(); 
        // verifica se realmente o método 'somar' foi chamado
    });
});
```




