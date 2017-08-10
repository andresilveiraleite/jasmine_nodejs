describe("Comparador toBeNull", function(){
    it("deve validar o uso do toBeNull - Comparando Objeto inicializado com o tipo 'null'", function(){
        var n1 = null;
        expect(n1).toBeNull();
    })

    it("deve validar o uso do toBeNull - Comparando Objeto inicializado com o tipo 'undefined'", function(){
        var n2 = undefined;
        expect(n2).not.toBeNull();
    })
    
    it("deve validar o uso do toBeNull - Comparando Objeto não Inicializado", function(){
        var n3;
        expect(n3).not.toBeNull(); // Como não definimos nenhum valor para a variável n3, a mesma encontra-se = INDEFINIDA, logo não encontra-se como "null".
    })

    it("deve validar o uso do toBeNull - Comparando Objeto inicializado com o tipo 'NaN - Not a Number'", function(){
        var n4 = NaN;
        expect(n4).not.toBeNull(); // O objeto "n4" é um tipo no js = Not a Number, logo não é "null".
    })

    it("deve validar o uso do toBeNull - Comparando Objeto inicializado com o tipo 'String'", function(){
        var n5 = "teste";
        expect(n5).not.toBeNull();
    })
})