describe("Comparador toBeUndefined", function(){
    it("deve validar o uso do toBeUndefined - Comparando Objeto não inicializado", function(){
        var n1;    
        expect(n1).toBeUndefined();
    })
    
    it("deve validar o uso do toBeUndefined - Comparando Objeto Undefined", function(){
        var n2 = undefined;
        expect(n2).toBeUndefined();  // Como o objeto é indefinido, a validação será realizada com sucesso.
    })
    
    it("deve validar o uso do toBeUndefined - Comparando Objeto com o tipo Booleano = False", function(){
        var n3 = false; 
        expect(n3).not.toBeUndefined();  // Precisamos incluir a cláusula .not pois o n3 foi inicializado com "False".     
    })

    it("deve validar o uso do toBeUndefined - Comparando Objeto com o tipo 'null'", function(){
        expect(null).not.toBeUndefined();  // Precisamos incluir a cláusula .not pois o objeto foi inicializado com "null".     
    })
})