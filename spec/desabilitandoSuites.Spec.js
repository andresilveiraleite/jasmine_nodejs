xdescribe("Exemplo de Suíte de teste 'DESABILITADA' ", function(){
    var contador = 0;

    beforeEach(function(){
        contador +=1;    
    });

    it("deve garantir que o contador foi incrementado em 1", function(){
        expect(contador).toEqual(1)
    })
})