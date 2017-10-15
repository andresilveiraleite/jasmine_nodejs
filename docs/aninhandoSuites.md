# Aninhando suítes
## Suítes podem ser aninhadas e conter outras suítes dentro delas

As funções especiais como o "beforeEach" ou "afterAll" serão executadas antes e depois de todos os testes em ordem.

CUIDADO ao aninhar suítes!!! Pois podemos tornar os testes muito mais complexos e de difícil compreensão.
### Muitos consideram essa prática como desnecessária, pois podemos ter uma codificação gigantesca e com uma dinâmica muito complexa.

#### Exemplo:

```js
describe("Suíte de Testes - Exemplo 'Aninhando Contador Externo'", function(){   
    var contadorExterno = 0;
    beforeEach(function(){
        contadorExterno++;
    });
    it("deve ter incrementado o contador externo para 1", function(){
        expect(contadorExterno).toEqual(1);
    });

    describe("Suíte de Testes - Exemplo'Aninhando Interna com Externa'", function(){
        var contadorInterno = 1;
        beforeEach(function(){
            contadorInterno++;
        });
    })

    it("deve conter o valor '2' para ambos contadores", function(){
        expect(contadorInterno).toEqual(contadorExterno);
    })
})
```

[Home](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/README.md)  