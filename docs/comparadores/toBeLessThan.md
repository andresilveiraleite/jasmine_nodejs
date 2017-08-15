# Comparador toBeLessThan
## Compara se um valor numérico é menor do que outro valor

Realiza a conversão para valor numérico antes da comparação, podendo o valor ser passado em formato "Texto".

PS: Evitem usar o not.toBeLessThan (Para menor), pois já existe o "toBeGreaterThan" (Para maior) e com isso o código fica de mais fácil compreensão.

PS2: Para comparação de valores iguais, utilize o comparador "toEqual".

Exemplo:

```js
describe("Comparador toBeLessThan", function(){
    const PI = 3.1415;
    var numero = 5;

    it("deve Validar o uso do Matcher 'toBeLessThan'", function(){
        expect(numero).toBeLessThan(PI);    // Valida se o valor da variável "numero" é maior que a de "PI".    
        expect("5,0").toBeLessThan(PI);     
        // Valida se o valor da variável da string "5,0" é maior que a de"PI". 
        
        expect("2").not.toBeLessThan(PI);  
        // Valida se o valor da variável da string "2" é maior que a de "PI".    
        // E como e menor, precisamos incluir a cláusula .not.
        // É importante citar que para esse caso, deveríamos utilizar o comparador "toBeLessThan".
    })
})
```
