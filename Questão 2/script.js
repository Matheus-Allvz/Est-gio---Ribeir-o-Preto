// Abra o arquivo HTML para conferir a resolução

/*
2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula
 ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
*/

function stringCheck(){
    const str = document.getElementById("imputText").value;
    const newStr = str.toLowerCase().trim()
    const resultP = document.getElementById("result");
    const strlen = str.length;

    let count = 0;
    
    
    if(newStr.includes('a')){
        for(let i = 0; i < strlen; i++){
            if(newStr[i] == 'a'){
                count++;
            }
        }
    }
    
    if(newStr.includes('a')){
        resultP.innerText = `A letra 'a' aparece ${count} vezes na string.`;
    }else{
        resultP.innerText = `A letra 'a' não aparece na string.`;
    }

}

stringCheck();