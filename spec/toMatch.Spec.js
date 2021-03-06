describe("Comparador toMatch", function(){
    it("deve validar o uso do toMatch - Comparando o Valor de uma 'String'", function(){
        var texto = "Validando o uso do Comparador 'toMatch' do Jasmine"
        expect(texto).toMatch("Jasmine"); // Se não utilizarmos expressão regular (/ - Barra) teremos que nos atentar, pois trata-se de um comparador "Case Sensitive".
    })

    it("deve validar o uso do toMatch - Comparando o Valor de uma Expressão regular Básica/i - Case Insensitive", function(){
        var texto = "Validando o uso do Comparador 'toMatch' do Jasmine"
        expect(texto).toMatch(/jasmine/i);
        // Se utilizarmos expressão regular, podemos incluir o "i" logo depois da barra que significa:
        // Case Insensitive - indifere estar maiúsculo ou minúsculo.
    })
    it("deve validar o uso do toMatch - Comparando o Valor de uma Expressão regular 'CEP'", function(){   
        var texto = "Validando o uso do Comparador 'toMatch' do Jasmine"
        expect("20520-055").toMatch(/^\d{5}-\d{3}$/); 
        // Começamos e terminamos com / - Barra
        // O circuflexo ^ serve para marcar o início - Quero que comece COM
        // Vamos adicionar o \d -- Significa que queremos que comece com dígitos (Número 0 a 9)
        // Porém eu quero 5 -- Como Demarco isso? através de {} - Passando o número => {5} -> quero que comece com números e que tenha 5 números em sequência
        // Logo depois teremos um "traço" -
        // Depois vou adicionar mais 3 dígitos --> \d{3}
        // $/ ==> Terminou. Não quero mais nada além disso.
    })
})