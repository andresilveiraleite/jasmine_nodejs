# Comparador toMatch
## Realiza a comparação utilizando expressões regulares

Caso tenhamos utilizado um objeto (variável) passando uma "String" como parâmetro, o comparador tentará encontrar o texto passado dentro do valor a ser comparado.

Podemos utilizar o comparador "toMatch" para fazer busca em texto e validação de padrões em uma string (Inclusive expressões regulares).

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toMatch'", function(){
    var textoComparar = "Comparando Texto Inputado"
    it("deve Validar o uso do matcher 'toMatch'", function({
        expect(textoComparar).toMatch(/Inputado/);  
        //Expressões regulares em JS.sempre começam e terminam com / - Barra
        
        expect(textoComparar).toMatch("Inputado");
        expect(textoComparar).toMatch(/Inputado/i);
        // Se utilizarmos expressão regular, podemos incluir o "i" logo depois da barra que significa:
        // Case Insensitive - indifere estar maiúsculo ou minúsculo.
        
        expect(textoComparar).not.toMatch(/Não existe no textoComparar/)       
    }))
})
```