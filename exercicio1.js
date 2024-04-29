 //Crie uma função de soma que precisará ter como resultado um número par.
  //Para isso, você precisará criar os seguintes callbacks:

//- callbackSucesso(): Mostre uma mensagem de sucesso, dizendo que a operação
// foi concluída com sucesso e que o número somado é par (resultado da soma).
//- callBackError(): Mostre uma mensagem de erro, dizendo que a operação falhou,
 //trazendo um número impar (resultado da soma).

 function soma(a, b, callbackSucesso, callBackError) {
    let resultado = a + b;
    if (resultado % 2 === 0) {
          callbackSucesso();
    }
    else 
          callBackError();
       }
       function callbackError() {
          console.log("Erro : a soma é impar ");
       }
       function callbackSucesso() {
          console.log("Sucesso : a soma é par ")
       }
       soma(2, 5, callbackSucesso, callbackError);
       soma(2,8, callbackSucesso, callbackError);
       soma(2, 4, callbackSucesso, callbackError);
        soma(2, 3, callbackSucesso, callbackError);    