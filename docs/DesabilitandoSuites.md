# Desabilitando Suítes
## Uma Suíte pode ser desabilitada para que todos os testes contidos na mesma, sejam ignorados

Exemplo:

```js
xdescribe("Exemplo de Suíte de teste ", function(){
    var contador = 0;

    beforeEach(function(){
        contador +=1;    
    });

    it("deve garantir que o contador foi incrementado em 1", function(){
        expect(contador).toEqual(1)
    })
})
´´´
