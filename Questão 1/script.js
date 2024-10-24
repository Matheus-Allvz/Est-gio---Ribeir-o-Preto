// Abra o arquivo HTML para conferir a resolução

/*
1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
Números de Fibonacci (Pra usar no debug)
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
*/



function isInFibonacci(){
    const imputNumber = Number(document.getElementById("imputNumber").value);
    const resultP = document.getElementById("result");
    const fibSequence = [0, 1];

    let length = fibSequence.length;

    if(imputNumber === fibSequence[0] || imputNumber === fibSequence[1]){
        resultP.innerText = `O número ${imputNumber} faz parte da sequência.`;
    }
    
    while(fibSequence[length - 1] < imputNumber){
        fibSequence.push(fibSequence[length - 1] + fibSequence[length - 2]);
        length++;

        if(imputNumber === fibSequence[length - 1]){
            resultP.innerText = `O número ${imputNumber} faz parte da sequência.`;
        }else{
            resultP.innerText = `O número ${imputNumber} não faz parte da sequência.`;
        }

    }

    
}
