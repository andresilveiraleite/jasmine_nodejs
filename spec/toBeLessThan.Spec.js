describe("Comparador toBeLessThan", function(){
    const PI = 3.1415;
    it("deve validar o uso do toBeLessThan - Validando Conversão de Texto para Número", function(){
        expect("2.0").toBeLessThan(PI);
    })

    it("deve validar o uso do toBeLessThan - Validando Valor Maior que o Esperado - Cláusula .not", function(){
        expect(5).not.toBeLessThan(PI);
    })
})



