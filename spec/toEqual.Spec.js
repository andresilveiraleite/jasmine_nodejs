describe("Comparador toEqual", function(){
    it("deve validar o uso do toEqual - Comparando o Valor Booleano", function(){
        expect(true).toEqual(true); // Comparando um valor Booleano.        
    })

    it("deve validar o uso do toEqual - Comparando o Valor de uma 'String'", function(){
        expect("Teste").toEqual("Teste");  // Comparando uma string.    
    })

    it("deve validar o uso do toEqual - Comparando o Valor dos Objetos", function(){
        var obj1 = { valor: true };
        var obj2 = { valor: true };

        expect(obj1).toEqual(obj2); 
        // Validando se o obj1 possui o mesmo valor do objeto 2 independente se são "Objetos" diferentes.
        // É importante citar que esse exemplo ilustra bem a diferença entre o comparador "toBe" e "toEqual"
        // Pois independente dos objetos serem diferentes, o toEqual se preocupou apenas com os valores dos objetos
        // e não com os objetos em sim. se Utilizássemo o toBe para essa validação, daria erro.
     })
});