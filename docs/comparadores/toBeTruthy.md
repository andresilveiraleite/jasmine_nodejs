# Comparador toBeTruthy
## Realizar uma comparação informando se uma variável ou objeto possui um valor válido

É importante citar que um "valor" é considerado válido caso seja diferente de:
'False', '0', 'Undefined', 'null', ou 'NaN'.

Deve ser utilizado quando precisarmos validar valores inválidos distintos, baseados nas opções citadas acima.

Por questões de facilidade de compreensão do código, prefira utilizar o comparador "toBeFalsy", ao invés de "not.toBeTruthy".

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toBeTruthy'", function(){
    var objeto = {'valor': 123}
    var texto;
    var numero = 10;
    it("deve validar o uso do matcher 'toBeTruthy'", function(){
        expect(objeto).toBeTruthy();
        expect(texto).not.toBeTruthy(); 
        // O Objeto "Texto" possui valor "Indefinido", logo precisamos utilizar a cláusula "not". 
        // É importante citar que deveríamos utilizar o matcher "toBeFalsy".
        
        expect(numero).toBeTruthy();        
    })

})
```