# beforeAll
## Função JS Global do Jasmine (Executada uma única vez antes da execução dos testes)

Pode ser executada antes de todos os testes.
Serve para inicializar um status, criar objetos, etc.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'beforeAll'", function(){
    var contador;

    beforeAll(function(){   // Inicializamos o contator com 10 na 1 rodada dos testes.
        contador = 10;
    });

    beforeEach(function(){  // Após a 1 rodada iremos incrementar sempre mais 1 a cada teste    
        contador++;
    });

    it("deve exibir o contador com valor 11", function(){
        expect(contador).toEqual(11);  
    });

    it("deve exibir o contador com valor 12", function(){
        expect(contador).toEqual(12);
    });
})
```
