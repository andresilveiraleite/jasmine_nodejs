describe("Funcionamento do 'fail'", function(){
    it("deve exemplificar o uso do 'fail'", function (){
        var operacao = function(executar, callback) {
            if(executar) {
                callback();
            }
        }
        operacao(false, function(){ // Utilizaremos o parâmetro 'false" para que essa função não seja executada
            fail("Não deve executar a função de callBack");
        }) 
    })
})