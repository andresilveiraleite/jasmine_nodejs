# beforeEach
## Função JS Global do Jasmine (Executada antes de cada teste)

Por ser executada antes de cada teste, serve para inicializar ou reiniciar um status, parâmetro ou qualquer outra coisa.

Pode executar uma ação antes de cada teste.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'beforeEach'", function(){   
    // Antes de cada teste ser executado, iremos incrementar + 1 ao contador
    // Logo, nossas validações serão realizadas com sucesso.
    var contador = 0;
    beforeEach(function(){
        contador++;
    });

    it("deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(1);
    });

    it("deve exibir o contador com valor 1", function(){
        expect(contador).toEqual(2);
    });  

})
```