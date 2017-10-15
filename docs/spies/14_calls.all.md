# calls.all
## Contém e retorna todas as informações de chamadas de um método do SPY.
### As informações armazenadas são o tipo de Objeto (object), e os valores de retorno (returnValue). Esses itens são agrupados e são referenciados por número de chamada.

Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.all", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    it("deve validar o uso da função 'calls.all'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
        var retorno = calculadora.somar.calls.all();  
        // Atribuo a varíavel retorno todas as informações de chamadas do objeto/método "somar".
        
        expect(retorno[0].object).toEqual(calculadora);
        //Validamos se no array na 1 posição existe um objeto "CALCULADORA"
       
        expect(retorno[0].args).toEqual([1,1]);
        //Validamos se no array na 1 posição existem os argumentos 1,1.

        expect(retorno[0].returnValue).toBeUndefined();
        //Validamos se no array na 1 posição existe o retorno do valor 1 + 1 (e como não foi definido , será undefined)

 
    });
});
```                                       

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  