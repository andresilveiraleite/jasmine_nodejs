# Comparador toBeNull
## Realiza a comparação de um objeto como sendo "null"

Usamos o 'null' para dizermos que uma variável não possui valor.

É importante citar que 'null' é diferente de 'undefined', pelo fato do 'null' ser um tipo e 'undefined' ser uma variável que ainda não foi definida.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toBeNull'", function(){
    var objeto = null;
    var texto;
    var numero = 10;

    it("deve validar o uso do matcher 'toBeNull'", function(){
        expect(objeto).toBeNull();  
        // A variável "Objeto" foi definida com o valor "null", logo a comparação será válida.
        
        expect(texto).toBeNull(); 
        // A variável "texto" não teve valor definido, logo é "null" e a comparação será válida.

        expect(numero).not.toBeNull(); 
        // Como a variável "numero" possui valor definido, precisamos incluir a cláusula "not" para validarmos a comparação com sucesso.
    })

})
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/comparadores/Comparadores.md)  
