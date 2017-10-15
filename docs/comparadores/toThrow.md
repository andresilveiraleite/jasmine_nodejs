# Comparador toThrow
## Verifica se uma exceção é lançada por um método

Não realiza a validação em detalhe e o tipo de exceção ocorrida.

Apenas certifica que ocorreu um erro na execução de uma determinada função.

Pode ser utilizada quando apenas desejamos saber se um erro ocorreu, sem se procupar com os detalhes do mesmo.

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toThrow'", function(){
    var comErro = function() {
        return numero * 10;
    };

    var semErro = function(numero) {
        return numero * 10;
    };
    
    it("deve Validar o uso do matcher 'toThrow'", function(){
        expect(comErro).toThrow();      
        // Como não passamos nenhum parâmetro para a função (O numero não foi definido), ao tentar executar esse cálculo, ocorrerá um erro. 
        
        expect(semErro).not.toThrow();
        // Como passamos o parâmetro a função, o processamento será executado e por isso não irá ocorrer erro.
        // Logo, precisaremos da cláusula .not para não ocorrer erro no comparador "toThrow".
    })
})
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/comparadores/Comparadores.md)  