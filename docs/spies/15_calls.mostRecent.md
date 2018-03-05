# calls.mostRecent
## Retorna os dados da última chamada do método SPY
### Acessará o último elemento (QTD de ITENS - 1 = PQ sempre iniciamos com índice 0) da lista contida em "calls.all"
Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'calls.mostRecent", function(){

    var calculadora = {
        somar: function(n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(function() {
        spyOn(calculadora, "somar")
            
    });

    beforeAll(function() {  //Aqui podemos "Mascarar" qualquer informação.
        spyOn(Calculadora, "somar").and.returnValue(10);
        spyOn(Calculadora, "subtrair");
    });

    it("deve validar o uso da função 'calls.mostRecent'", function(){
        calculadora.somar(1,1); // 1 Chamada ao método Spy Somar passando os parâmetros 1,1
        calculadora.somar(2,3); // 2 Chamada ao método Spy Somar passando os parâmetros 2,3
        
        var retorno = calculadora.somar.calls.mostRecent();  
        // Atribuo a varíavel retorno a última chamada do objeto/método "somar".
        
        expect(retorno.object).toEqual(calculadora);
        //Validamos se utilizando a função supracitada
       
        expect(retorno.args).toEqual([2,3]);
        //Validamos se busca a última posição do array - 2, 3.

        expect(retorno.returnValue).toEqual(10);
        //Forçamos o retorno do valor de soma ser sempre = 10 (em beforeAll).

 
    });
});
```                                       

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  