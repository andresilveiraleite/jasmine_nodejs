# Comparador toBeUndefined
## Realiza a comparação de um objeto sendo "Undefined".

Um valor que não foi definido ou possui o valor "Undefined". 

Não recebe nenhum parâmetro, basta chamar a função diretamente, tendo referência a saída de um expect.

PS: Evitem usar o not.toBeUndefined, pois já existe o "toBeDefined" e com isso o código fica de mais fácil compreensão.

Exemplo:

```js
describe("Comparador toBeUndefined", function(){
    var numero =10;
    var texto;
    var obj = {'valor': 10};

    it("deve Validar o uso do Matcher 'toBeUndefined'", function(){
        expect("texto").toBeUndefined();            //O objeto "texto" não foi definido, a validação será Válida.
        expect("numero").not.toBeUndefined(); 
        //O objeto "Numero" foi definido, logo precisamos da cláusula .not
        //Conforme citamos, o melhor seria utilizar o matcher "toBeDefined".

        expect("obj.mensagem").toBeUndefined()  // Obj.mensagem não foi definido, logo será Válido o teste.
        
        expect("obj.valor").not.toBeUndefined() 
        // Obj.valor está definido, logo precisamos da cláusula .not
        //Conforme citamos, o melhor seria utilizar o matcher "toBeDefined".
    })

})

```