# calls.first
## Retorna os dados da 1 chamada do método spy
### Acessa o 1 elemento (posição 0) da lista contida em "Calls.all"


Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.first", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    it("deve validar o uso da função 'calls.first'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
        calculadora.somar(2,3); // 2 Chamada ao método Spy Somar passando os parâmetros 2,3
        
        var retorno = calculadora.somar.calls.firts();  
        // Atribuo a varíavel retorno a primeira chamada do objeto/método "somar".
        
        expect(retorno.object).toEqual(calculadora);
        //Validamos se utiliza a função supracitada
       
        expect(retorno.args).toEqual([1,1]);
        //Validamos se busca a 1 posição do array.

        expect(retorno.returnValue).toBeUndefined();
        
    });
});
```                                       

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  