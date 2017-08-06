# Como Criar Suites e Testes?

Suítes de teste servem para definir o escopo do que está sendo testado. 
Ex.: Cadastro de Clientes - Operação Matemática - Calculadora 
-> (Criar uma suíte para testar a operação de soma e outra para subtração).

Uma aplicação é composta por diversas suítes. No jasmine a suíte é uma função global chamada: Describe que possui dois parâmetros: Descrição e os testes (Specs).

Describe é a suíte de teste: 
Ex.: describe("Operação de Adição", function() {
});

Obs.: Contém dois parâmetros: descrição e função.

Specs "it" são os testes que serão feitos para validar uma suíte de testes (Describe).
Também possui dois parâmetros: Descrição e função.
Devemos iniciar sempre o it com : "deve"

--> Logo Describe é a suíte e o It são os testes a serem desenvolvidos na suíte.
Ex.: describe("Operação de Adição",function() {
       it("deve garantir 1 + 1 = 2", function(){   --> It = SPEC.
        });
     });     		