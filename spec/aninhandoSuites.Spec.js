describe("Suíte de Testes Externa - 'Aninhando Contador Externo'", function(){   
    var contadorExterno = 0;

    beforeEach(function(){
        contadorExterno++;
    });
    
    it("deve ter incrementado 1 para o contador externo", function(){
        expect(contadorExterno).toEqual(1);
    });

    describe("Suíte de Testes Interna - Exemplo'Aninhando Contador Interno'", function(){
        var contadorInterno = 0;

        beforeEach(function(){
            contadorInterno++;
        });

        it("deve validar o Valor do Contador Interno e externo = 2" , function(){
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        })
    })
})