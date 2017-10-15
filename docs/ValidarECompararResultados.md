# Como validar e comparar resultados?
O jasmine possui uma função global javascript chamada expect, que recebe um parâmetro como argumento que é o resultado a ser verificado. Deve ser utilizado com uma comparação "matcher" que conterá o valor a ser comparado.

Um spec poderá ter uma ou mais verificações.
Uma boa prática é sempre manter as verificações no final da função.
Sabemos que para cada expectativa (expect) precisamos ter uma comparação.

Ex.:

```js
  describe("Operação de Adição",function() {
    it("deve garantir 1 + 1 = 2", function(){   // It = SPEC.
      expectCalculadora,adcionar(1,1)).toBe(2);   // toBe é um dos comparadores.
    });
  });
```

Mas o que são esses comparadores?
Comparações (Matchers):--> São funções que retornam um valor boleano para ser verificado através de uma expectation. O Jasmine contém uma série de matchers implementados por padrão, exemplos:
toBe, toEqual, toMatch, toBeDefined, toBeUndefined, toBeNull, toBeTruthy, toBeFalsy, toContain
toBeLessThan, toBeGreaterthan, toThrow e toThrowError.
	
Obs.: Podemos criar nossos próprios Matchers (caso seja necessário) e devemos lembrar que todos os matchers existentes no Jasmine pode ser "negado" através da palavra "Not".

[Home](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/README.md)  

