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
                expect("20520-055").toMatch(/^\d{5}-\d{3}$/); 
        // Começamos e terminamos com "Barra"
        // O circuflexo ^ serve para marcar o início - Quero que comece COM
        // Vamos adicionar o \d -- Significa que queremos que comece com dígitos (Número 0 a 9)
        // Porém eu quero 5 -- Como Demarco isso? através de {} - Passando o número => {5} -> quero que comece com números e que tenha 5 números em sequência
        // Logo depois teremos um "traço" -
        // Depois vou adicionar mais 3 dígitos --> \d{3}
        // $/ ==> Terminou. Não quero mais nada além disso.     
    }))
})
```

[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/comparadores/Comparadores.md)  