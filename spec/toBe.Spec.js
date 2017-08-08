describe("Comparador toBe", function(){
    it("deve validar o uso do toBe - Comparando o Valor Booleano", function(){
        expect(true).toBe(true);        // Comparando um valor boleano.        
    })

    it("deve validar o uso do toBe - Comparando o Valor de uma 'String'", function(){         
        expect("Teste").toBe("Teste");  // Comparando uma string.        
    });
    
    it("deve validar o uso do toBe - Comparando se o Obj1 não é igual ao Obj2'", function(){
        var obj1 = { valor: true};
        var obj2 = { valor: true};
        
        expect(obj1).not.toBe(obj2);    
        // Comparando se um objeto não é igual ao outro. 
        // Pois o toBe valida o "Objeto" e o Valor do mesmo, logo o Obj1 não é igual ao Obj2
        // Com isso precisamos de uma "Negação - Not" para que o testes seja validado com sucesso.
    });
})