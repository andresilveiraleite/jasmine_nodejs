# Comparador toBeFalsy
## Realiza uma comparação informando se uma variável ou objeto possui um valor inválido

Um valor será considerado inválido caso seja: false, 0, undefined, null ou NaN.

Devemos utilizá-lo quando a verificação abordar valores inválidos distintos, com base no valores citados acima.

Por questões de facilidade de compreensão do código, prefira utilizar o comparador "toBeTruthy", ao invés de "not.toBeFalsy".

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toBeFalsy'", function(){
    var numero = 10;
    
    it("deve validar o uso do matcher 'toBeFalsy'", function (){
        expect(numero).not.toBeFalsy(); // Aconselhamos para esse caso utilizar o matcher "toBeTruthy".
        expect(false).toBeFalsy();
        expect("").toBeFalsy();
        expect(0).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(null).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect("false").not.toBeFalsy(); //Trata-se de uma string, logo não é um valor inválido.
    })
)
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/comparadores/Comparadores.md)  