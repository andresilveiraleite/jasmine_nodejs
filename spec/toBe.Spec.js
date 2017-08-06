describe("Comparador toBe", function(){
    it("Deve Validar o uso do toBe", function(){
        var obj1 = { valor: true};
        var obj2 = { valor: true};

        expect(true).toBe(true);        // Comparando um valor boleano.
        expect("Teste").toBe("Teste");  // Comparando uma string.
        expect(obj1).not.toBe(obj2);    // Comparando um objeto.    
    })
})