describe("Comparador toContain", function(){
    it("deve validar o uso do toContain - Validando Valores dentro de um Array", function(){
        var nomes = ["José", "João", "André"]; //Adicionando um Array
        expect(nomes).toContain("José");
    })

    it("deve validar o uso do toContain - Validando uma substring dentro uma string - Case Sensitive", function(){
        var nomesTextoCaseS = "André";  
        expect(nomesTextoCaseS).not.toContain("andré");  // Precisamos incluir a cláusula .not pois o matcher é case sensitive".     
    })
    
    it("deve validar o uso do toContain - Validando uma substring dentro uma string", function(){
        var nomesTexto = "José João André";  
        expect(nomesTexto).toContain("José");  
    })
})



