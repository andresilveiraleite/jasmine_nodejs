# Comparador toBeGreaterThan
## Compara se um valor numérico é maior do que outro valor

Realiza a conversão para valor numérico antes da comparação, podendo o valor ser passado em formato "Texto".

PS: Prefira utilizar o "toBeGreaterThan" ao invés do comparador ".not.toBeLessThan"

PS2: Para comparação de valores iguais, utilize o comparador "toEqual".

Exemplo:

```js
describe("Comparador toBeGreaterThan", function(){
    const PI = 3.1415;
    var numero = 1;

    it("deve Validar o uso do Matcher 'toBeGreaterThan'", function(){
        expect(numero).toBeGreaterThan(PI);    // Valida se o valor da variável "numero" é maior que a de "PI".    
        expect("2,0").toBeGreaterThan(PI);     
        // Valida se o valor da variável da string "5,0" é maior que a de"PI". 
        //Além disso podemos perceber que a string foi "Convertida" em número para a realização da validação.
        
        expect("5").not.toBeGreaterThan(PI);  
        // Valida se o valor da variável da string "2" é maior que a de "PI".    
        // E como é menor, precisamos incluir a cláusula .not.
        // É importante citar que para esse caso, deveríamos utilizar o comparador "toBeGreaterThan".
    })
})
```