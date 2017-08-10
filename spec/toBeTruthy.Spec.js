describe("Comparador toBeTruthy", function(){
    it("deve validar o uso do toBeTruthy - Comparando Objeto com Valor Numérico 'Válido'", function(){
        var n1 = 10;    
        expect(n1).toBeTruthy();
    })
    
    it("deve validar o uso do toBeTruthy - Comparando Objeto Undefined", function(){
        var n2 = undefined;
        expect(n2).not.toBeTruthy();  // Precisamos incluir a cláusula .not pois o Objeto foi inicializado com "Undefined".     
    })
    
    it("deve validar o uso do toBeTruthy - Comparando Objeto com o tipo Numérico = 0", function(){
        var n3 = 0; 
        expect(n3).not.toBeTruthy(); // Precisamos incluir a cláusula .not pois o objeto foi inicializado com "0".     
    })

    it("deve validar o uso do toBeTruthy - Comparando Objeto com uma String Vazia", function(){
        var n4 = '';
        expect(n4).not.toBeTruthy(); // Precisamos incluir a cláusula .not pois o objeto foi inicializado com uma string "Vazia"    
    })

    it("deve validar o uso do toBeTruthy - Comparando Objeto com o tipo 'null'", function(){
        var n5 = null;
        expect(n5).not.toBeTruthy();  // Precisamos incluir a cláusula .not pois o objeto foi inicializado com "null".     
    })

    it("deve validar o uso do toBeTruthy - Comparando Objeto com o tipo 'Not a Number'", function(){
        var n6 = NaN;
        expect(n6).not.toBeTruthy();  // Precisamos incluir a cláusula .not pois o objeto foi inicializado com "null".     
    })

    it("deve validar o uso do toBeTruthy - Comparando Objeto não inicializado", function(){
        var n7;
        expect(n7).not.toBeTruthy();  // Precisamos incluir a cláusula .not pois o objeto foi inicializado com "null".     
    })
})