describe("Comparador toThrow", function(){
    it("deve validar o uso do toThrow - Validando Função Com erro", function(){
        function multiplicar() {
            numero * 10;
        };
        expect(multiplicar).toThrow();
    })
    
    it("deve validar o uso do toThrow - Validando Função com sucesso - Utilizando a cláusula .not", function(){
         function somar(n1, n2) {
            return  n1 + n2;
        };
        expect(somar).not.toThrow();  // Como o objeto é indefinido, a validação será realizada com sucesso.
    })    
})