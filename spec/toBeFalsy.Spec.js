describe("Comparador toBeFalsy", function(){
    it("deve validar o uso do toBeFalsy - Comparando Objeto com Valor Numérico 'Válido'", function(){
        var n1 = 10;    
        expect(n1).not.toBeFalsy(); // Precisamos incluir a cláusula .not pois o objeto foi inicializado.     
    })
    
    it("deve validar o uso do toBeFalsy - Comparando Objeto Undefined", function(){
        var n2 = undefined;
        expect(n2).toBeFalsy();
    })
    
    it("deve validar o uso do toBeFalsy - Comparando Objeto com o tipo Numérico = 0", function(){
        var n3 = 0; 
        expect(n3).toBeFalsy();
    })

    it("deve validar o uso do toBeFalsy - Comparando Objeto com uma String Vazia", function(){
        var n4 = '';
        expect(n4).toBeFalsy();
    })

    it("deve validar o uso do toBeFalsy - Comparando Objeto com o tipo 'null'", function(){
        var n5 = null;
        expect(n5).toBeFalsy(); 
    })

    it("deve validar o uso do toBeFalsy - Comparando Objeto com o tipo 'Not a Number'", function(){
        var n6 = NaN;
        expect(n6).toBeFalsy(); 
    })

    it("deve validar o uso do toBeFalsy - Comparando Objeto não inicializado", function(){
        var n7;
        expect(n7).toBeFalsy(); 
    })

    it("deve validar o uso do toBeFalsy - Comparando Objeto do Tipo Booleano 'False'", function(){
        var n8 = false;
        expect(n8).toBeFalsy(); 
    })

    it("deve validar o uso do toBeFalsy - Comparando Objeto do Tipo Booleano 'true'", function(){
        var n8 = true;
        expect(n8).not.toBeFalsy();  // Precisamos incluir a cláusula .not pois o objeto foi inicializado.     
    })
})