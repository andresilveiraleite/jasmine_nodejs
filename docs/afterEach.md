# afterEach
## Função JS Global do Jasmine (Executada depois de cada teste)

Por ser executada depois de cada teste, serve para reiniciar um status.

Pode executar uma ação depois de cada teste.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'afterEach'", function(){   
    var contador = 0;
    
    beforeEach(function(){
        contador++;
    });

    // Depois de cada teste ser executado, iremos incrementar atribuir o valor "0" para a variável contador
    afterEach(function(){
        contador = 0;
    });

    it("deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(1);
    });

    it("deve validar que o contador permanecerá = 1", function(){
        expect(contador).toEqual(1);  
        // O valor do contador será = 1 pois depois de cada teste
        // reinicializamos o mesmo para = 0 utilizando a função "afterEach"
    });  

})
```