describe("Comparador toBeGreaterThan", function(){
    const PI = 3.1415;
    it("deve validar o uso do toBeGreaterThan - Validando Conversão de Texto para Número", function(){
        expect("4.0").toBeGreaterThan(PI);     
        // Valida se o valor da variável da string "5,0" é maior que a de"PI". 
    }); 
    
    it("deve validar o uso do toBeGreaterThan - Validando Valor Menor que o Esperado - Cláusula .not'", function(){
        expect("1").not.toBeGreaterThan(PI);  
        // Valida se o valor da variável da string "2" é maior que a de "PI".    
        // E como e menor, precisamos incluir a cláusula .not.
        // É importante citar que para esse caso, deveríamos utilizar o comparador "toBeGreaterThan".
    })
})