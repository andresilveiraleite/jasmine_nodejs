# Comparador toBeDefined
## Realiza a comparação de um objeto como não sendo "undefined".

Undefined é o tipo (no JS) que informa que uma variável (Objeto) não foi inicializada.
Existem duas formas dele não ser definido:

 - Só a declaração sem o "="
 - Texto = Undefined

 PS: Evitem usar o not.toBeDefined, pois já existe p toBeUndefined e com isso o código fica de mais fácil compreensão.

Ex. do uso do comparador "toBeDefined" validando um "Objeto":

```js

describe("Comparador toBeDefined", function(){
    var numero = 10;
    var texto;
    var obj = {'valor': 10};
    
    it("deve Validar o uso do Matcher 'toBeDefined'", function(){
        expect(numero).toBeDefined();
        expect(texto).not.toBeDefined(); // A melhor maneira seria utilizar o "toBeUndefined".
        expect(obj.valor).toBeDefined();
        expect(obj.mensagem).not.toBeDefined() // A melhor maneira seria utilizar o "toBeUndefined".
    })
})

```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/comparadores/Comparadores.md)  
