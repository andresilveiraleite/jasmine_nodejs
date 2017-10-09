# toHaveBeenCalledWith
## Verificar com quais parâmetros um método do spy foi chamado
### Recebe como parâmetro os valores da chamada do método do spy (separados por vírgula) 


```js
describe("Spies - Mock Object - Validar o uso do 'toHaveBeenCalledWith'", function(){

    var calculadora {
        somar: function(n1,n2){
            return n1 + n2;
        }
    };

    beforeEach(function(){
        spyOn(calculadora, "somar");
    });

    it("deve validar o uso do 'toHaveBeenCalledWith'", function(){
        calculadora.somar(1,1);
        calculadora.somar(2,2);
        expect(calculadora.somar).toHaveBeenCalledWith(1,1);
        expect(calculadora.somar).toHaveBeenCalledWith(2,2);
    });
});
```
