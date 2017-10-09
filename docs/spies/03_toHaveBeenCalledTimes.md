# toHaveBeenCalledTimes
## Informa a quantidade de vezes que um método do spy foi executado
### Recebe como parâmetro o número de execuções a ser verificada


```js
describe("Spies - Mock Object - Validar o uso do 'toHaveBeenCalledTimes'", function(){
    var Calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(Calculadora, "somar");
    });

    it("Deve validar o uso do 'toHaveBeenCalledTimes'", function(){
        calculadora.somar(1,1);
        calculadora.somar(2,2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2); 
        // verifica se realmente o método 'somar' foi chamado
    });
});
```




