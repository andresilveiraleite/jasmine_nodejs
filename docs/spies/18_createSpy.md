# createSpy
## É uma função global do Java Script do Jasmine. É utilizado para criarmos um spy do "ZERO".
### Possui Todos os atributos de um objeto spy comum. Seus parâmetros são: Nome do objeto a ser criado, assim como seus métodos em formato de array. Deve ser utilizado quando precisamos de um objeto que não tem acesso direto a ele. 
### Permite a utilização de todos os elementos "AND" -- Ou seja, conseguimos implementar um método, adicionar um valor de retorno, etc.


Exemplo:

```js

describe("Spies - Mock Object - Validar o uso do 'createSpyObj", function(){

    //var somar = jasmine.createSpy("somar");
    var calculadora = jasmine.createSpyObj("calculadora",["somar", "subtrair"]);
    calculadora.somar.and.returnValue(10);
    
    it("deve validar o uso da função 'createSpyObj'", function(){
        
        expect(calculadora.somar(1,2)).toEqual(10);
        //Validar se o objeto foi chamado ao menos 1 x

        expect(calculadora.somar).toHaveBeenCalled();   
        //Validar os parâmetros que foram chamados

        expect(calculadora.somar).toHaveBeenCalledWith(1,2);   
        //Validar os parâmetros específicos que foram chamados

        expect(calculadora.somar.calls.mostRecent().args[0]).toEqual(1);
        // Validar se na 1 posição do array temos o valor = 1.
    
        
    });
});
```                                       



[Voltar](https://github.com/andresilveiraleite/jasmine_nodejs/blob/master/docs/spies/spies.md)  