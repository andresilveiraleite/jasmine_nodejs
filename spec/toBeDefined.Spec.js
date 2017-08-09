describe("Comparador toBeDefined", function(){
    it("deve validar o uso do toBeDefined - Comparando Objeto Inicializado", function(){
        var n1 = 10;
        expect(n1).toBeDefined();       // n1 contém o valor = 10
    });

    it("deve validar o uso do toBeDefined - Comparando Objeto Nulo", function(){
       expect(null).toBeDefined();     //null (tipo JS) = Nulo - Representa um valor NULO.
    });  

    it("deve validar o uso do toBeDefined - Comparando Objeto Não Numérico", function(){
        expect(NaN).toBeDefined();      // Nan (Tipo JS)= Not a Number - Representa um valor não númerico     
    });

    it("deve validar o uso do toBeDefined - Comparando Objeto Não Inicializado - Com a Cláusula .not", function(){    
        var n2;
        expect(n2).not.toBeDefined();   // Incluimos o not para o teste passar. Mas o correto é o utilizar o "toBeUndefined"
    });
    
    it("deve validar o uso do toBeDefined - Comparando Objeto Indefinido - Com a Cláusula .not", function(){
        var n3 = undefined;    
        expect(n3).not.toBeDefined();   // Pois podemos perceber que os objetos  n2 (não possui valor) e n3 (Valor: undefined).
    });    
})