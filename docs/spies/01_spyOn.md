# spyOn
## Utilizamos para criar um objeto falso (mock)

### Objetos falsos são muito úteis para realizar validações aonde não possuímos todos os componentes desenvolvidos.

Exemplo:

```js
describe("Exemplo de utilização do spyOn", function(){
    var calculadora = {
        somar.function(n1, n2){
            return n1 + n2;
        }
    };
    
    // Antes de tudo criamos o objeto falso:
    beforeEach(function(){
        spyOn(calculadora, "somar"); // Recebe como parâmetros o nome do objeto e do método.
    });
});

```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  