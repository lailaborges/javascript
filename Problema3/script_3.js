function imparpar(x){
    let resultado = x % 2;
    if(resultado == 0){
        console.log(`O número ${x} é par.`);
    } else{
        console.log(`O número ${x} é ímpar.`);
    }
}

imparpar(9);