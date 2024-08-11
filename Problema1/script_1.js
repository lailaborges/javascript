function podedirigir (idade,habilitacao){
    if(idade >= 18 && habilitacao == true){
        console.log("Você está apto(a) a dirigir");
    }else{
        console.log("Você não está apto(a) a dirigir");
    }
}

let idade = 30;
let habilitacao = false;

podedirigir(idade, habilitacao);