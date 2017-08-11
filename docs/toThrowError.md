# Comparador toThrowError
## Verificar se uma excessão é lançada por um método

Valida o tipo e a mensagem da excecão lançada.

Suporta expressão regular na validação da mensagem de erro.

Deve ser utilizada para maior controle do erro lançado.

Esse comparador pode receber parâmetro ou não:
Com parâmetro:
Pode receber uma string e nesse caso vai validar o erro exato da mensagem de erro.
Pode receber uma expressão regular que faria uma busca na msg do erro.
pode receber o tipo do error (typeError) e validá-lo.

Sem parâmetro:
Somente para verificar se um erro ocorreu

```js
describe("Suíte de Testes - Exemplo 'toThrowError'", function(){
    var calculaDobro = function(numero) {
        if (numero <=0) {
            throw new typeError("O número deve ser maior que 0.");
        }
        return numero * numero;
    };
    
    it("deve Validar o uso do matcher 'toThrowError'", function(){
        expect(function(){calcularDobro(0) })
                .toThrowError();

        expect(function(){calcularDobro(0) })
                .toThrowError("O número deve ser maior que 0.");

        expect(function(){calcularDobro(0) })
                .toThrowError(/maior que 0/);

        expect(function(){calcularDobro(0) })
                .toThrowError(typeError);

        expect(function(){calcularDobro(0) })
                .toThrowError(typeError,"O número deve ser maior que 0.); 

        expect(calcularDobro).not.toThrowError();     
    })
})
```

