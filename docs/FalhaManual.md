# Falha Manual "Fail"
## Falha manual permite interromper um teste lançando um erro

O Jasmine possui a função "fail" para falhar manualmente um teste.

Utilizamos a falha manual para certificar que uma operação não desejada não seja executada.
É muito utilizada numa função de callBack do JS. O que seria um callBack?
Uma função que recebe outra função como parâmetro.

Exemplo:

```js
describe("", function(){
    var operacao = function(deveExecutar, callBack) {  // Recebe uma parâmetro "deveExecutar" e uma função "Callback" 
        if(deveExecutar) {
            callBack();  
        }
    };
    it("Não deve executar a função de callBack", fucntion(){  
        operacao(false, function() {   
            // Chamada a função onde passo um valor se deve executar ou não e a função a ser chamada e caso não queira que essa função seja executada, colocaríamos um fail, conforme abaixo 
            fail("Função de callBack foi executada");
        });
    });
});
```