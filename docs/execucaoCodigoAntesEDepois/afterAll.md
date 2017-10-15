# afterAll
## Função JS Global do Jasmine (Executada uma única vez depois da execução dos testes - Término da Suíte)

Pode ser executada depois de todos os testes.
Serve para limpar algum status global.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'afterAll'", function(){
    var contador;

    beforeAll(function(){   // Antes de todos os testes iremos atribuir o valor 10 ao contador,.
        contador = 10;
    });

    afterAll(function(){  
        // Com essa função, sempre manteremos o contador com o valor = 10. 
        // Pois depois de todos os testes ele irá atribuir o valor 0 ao contador.
        contador = 0;
    });

    it("deve exibir o contador com valor = 10", function(){
        expect(contador).toEqual(10);  
    });

    it("deve manter o contador com valor = 10", function(){
        expect(contador).toEqual(10);
    });
})
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/execucaoCodigoAntesEDepois/ExecCodigoAnteseDepois.md)  
