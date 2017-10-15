# Comparador toEqual
## Realiza a comparação de dois elementos de modo muito parecido com o comparador "toBe"

A única diferença é que ele não compara o tipo do objeto, somente seu valor.

É recomendado seu uso para comparações de valores literais.

O objeto (variável) contém o mesmo valor que o outro objeto? Utilize o toEqual.

caso esteja comparando dois valores literais: true com true ou uma soma que retorna um número com um número (devemos utilizar o toEqual ao invés do toBe), pois como ele é mais simples (não compara a nível de objeto), devemos ter um leve ganho de performance.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toEqual'", function(){

    var valorBooleano = true;
    var valorBooleano2 = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = {'valor': valorBooleano};
    var obj2 = {'valor': valorBooleano};

    it("deve validar o uso do matcher 'toEqual'", function(){
        expect(valorBooleano).toEqual(true);
        expect(valorBooleano).toEqual(valorBooleano2);
        expect(valorBooleanoCopia.toEqual(valorBooleano);
        expect(valorBooleano).not.toEqual(valorBooleanoTexto);
        expect(valorBooleanoTexto).toEqual("true");
        expect(obj1).toEqual(obj2);
    })
});

```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/comparadores/Comparadores.md)  