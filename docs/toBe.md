# Comparador toBe
Realiza a comparação com o operador '===', que compara o valor e também o tipo do objeto.
Deve ser utilizado para comparar valores de forma mais efetiva pelo fato de também verificar o tipo do objeto.

Ex. do uso do comparador "toBe" validando um "Objeto":
describe("Comparador toBe", function(){
    it("Deve Validar o uso do toBe", function(){
        var obj1 = { valor: true};
        var obj2 = { valor: true};
        expect(obj1).toBe(obj2); // Validando um objeto.        
    })
})

==> O Resultado desse teste será de insucesso, pois o comparador "toBe" não verifica se o objeto contém o mesmo valor, ele verifica se o objeto é o mesmo objeto (contém a mesma referência),
Como são objetos diferentes, será exibido erro. Para seguirmos a didática do curso, vamos adicionar o "not", para conseguirmos efetivar a comparação:

describe("Comparador toBe", function(){
    it("Deve Validar o uso do toBe", function(){
        var obj1 = { valor: true};
        var obj2 = { valor: true};
        expect(obj1).not.toBe(obj2);        
    })
})
 
==> Agora sim teremos o resultado de sucesso.
	
Ex. do uso do comparador "toBe" validando um valor boleano e uma string:
describe("Comparador toBe", function(){
    it("Deve Validar o uso do toBe", function(){
        expect(true).toBe(true);        // Comparando um valor boleano.
        expect("Teste").toBe("Teste");  // Comparando uma string.
    })
})

==> Teremos a exibição de sucesso para essas comparações.
