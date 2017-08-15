# Compardor toContain
## Realiza a busca por um determinado item em um Array

Podemos utilizá-lo para buscar uma substring dentro uma string.

Obs. Importante: Não suporta busca por expressões regulares, porém possui um atributo bacana que realizar buscas dentro de um "Array".

Exemplo:

```js
describe("Suíte de Testes - Exemplo 'toContain", function(){
    var nomes = ["José", "João", "André"];  // Adicionando um Array
    var nomesTexto = "José João André";

    it("deve validar o uso do matcher 'toContain'", function(){
        expect(nomes).toContain("José");    // Percebemos que conseguimos realizar buscas dentro de uma array
        expect(nomesTexto).toContain("João");
        expect(nomesTexto).toContain("Jo");
        expect(nomes).toContain("José");
        expect(nomes).not.toContain("Felipe");
        
        expect(nomes).not.toContain("andré");   
        // Esse Comparador é case sensitive, logo precisamos nos preocupar com as letras maiúsculas e minúsculas
    })
})
```