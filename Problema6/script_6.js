function totalpedido(){
    const valor = prompt("Informe o total do pedido.");

	const valornumero = Number(valor);

    const desconto = valornumero * 0.10;
    const valortotal = valornumero - desconto;

    if (valornumero > 200){
        console.log(`O valor total do pedido com desconto é de R$ ${valortotal.toFixed(2)}`);
        console.log(`O desconto aplicado foi de R$ ${desconto.toFixed(2)}`);
    } else{
        console.log(`O valor total do pedido é de R$ ${valornumero.toFixed(2)}`);
    }
}

totalpedido();