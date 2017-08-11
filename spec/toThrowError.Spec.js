describe("Comparador toThrowError", function(){
    
    const  somar = function(n1, n2) {
            if (n1 <= 0 || n2 <= 0) {
                throw new TypeError("Deve ser maior que 0")
            }
            return n1 + n2;
    }
    
    it("deve validar o uso do toThrowError - Validando se o Erro Ocorreu - Sem Parâmetro", function(){
       expect(function() { somar(0, 0)}).toThrowError(); // Validando somente que um erro foi lançado.
    })   

    it("deve validar o uso do toThrowError - Validando Mensagem do Erro - Com Parâmetro", function(){
        expect(function() { somar(0, 0)}).toThrowError(  // Validando mensagem do erro.
            "Deve ser maior que 0"); 
    })        

    it("deve validar o uso do toThrowError - Validando Mensagem do Erro - Com Expressão Regular", function(){        
        expect(function() { somar(0, 0)}).toThrowError( // Validando mensagem do erro com expressão regular.
            /ser maior/);   
    })    

    it("deve validar o uso do toThrowError - Validando o Tipo do Erro", function(){    
        expect(function() { somar(0, 0)}).toThrowError(TypeError); // Validando o tipo do erro.   
    })

    it("deve validar o uso do toThrowError - Validando Retorno Sucesso - Add Cláusula .not", function(){
        expect(function() { somar(1,1)}).not.toThrowError();
    })
})