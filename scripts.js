// Uma loja oferece descontos diferentes com base no valor total das compras de um cliente. Crie um programa que solicite ao usuário o valor total de suas compras e aplique os seguintes descontos:

// Compras até R$ 100,00 (inclusive): sem desconto e exibir a mensagem "Sem desconto aplicado, valor total a pagar: R$ {COLOCAR O VALOR}".
// Compras entre R$ 100,01 e R$ 500,00 (inclusive): desconto de 10% e exibir a mensagem "Você recebeu um desconto de 10%, valor total a pagar: R$ {COLOCAR O VALOR}".

// Compras entre R$ 500,01 e R$ 1000,00 (inclusive): desconto de 15% e exibir a mensagem "Você recebeu um desconto de 15%, valor total a pagar: R$ {COLOCAR O VALOR}".
// Compras acima de R$ 1000,00: desconto de 20% e exibir a mensagem "Você recebeu um desconto de 20%, valor total a pagar: R$ {COLOCAR O VALOR}".

// Implemente um programa que solicite o valor total das compras ao usuário e, com base nesse valor, calcule o desconto apropriado, exibindo a mensagem correspondente.

// let valorCompra = Number(prompt('Digite o valor da compra'));

// if (valorCompra > 0 && valorCompra <= 100) {
//     console.log(`Sem desconto aplicado, valor total a pagar: R$ ${valorCompra}`);
// } else if (valorCompra >= 100.01 && valorCompra <= 500) {
//     let desconto10 = valorCompra - (valorCompra * 0.1);
//     console.log(`Você recebeu um desconto de 10%, valor total a pagar: R$ ${desconto10}.`)
// } else if (valorCompra >= 500.01 && valorCompra <= 1000) {
//     let desconto15 = valorCompra - (valorCompra * 0.15);
//     console.log(`Você recebeu um desconto de 15%, valor total a pagar: R$ ${desconto15}.`)
// } else if (valorCompra > 1000) {
//     let desconto20 = valorCompra - (valorCompra * 0.2);
//     console.log(`Você recebeu um desconto de 20%, valor total a pagar: R$ ${desconto20}.`)
// } else {
//     console.log('Valor inválido')
// }

// Solicitar ao usuário o valor total das compras
// Ler valorTotalCompras

// Se valorTotalCompras <= 100,00 então

//     imprima 'Sem desconto, valor total a pagar: R$ValorTotalCompras'

// Senão se valorTotalDaCompras <= 500,00 então

//     desconto10 = valorTotalCompras - (valorTotalCompras * 0,10)
//     imprima 'Desconto de 10%, valor total a pagar: R$desconto10'

// Senão se valorTotalCompras <= 1000,00 então

//     desconto15 = valorTotalCompras - (valorTotalCompras * 0,15)
//     imprima 'Desconto de 15%, valor total a pagar: R$desconto15'

// Senão

//     desconto20 = valorTotalCompras - (valorTotalCompras * 0,20)
//     imprima 'Desconto de 20%, valor total a pagar: R$desconto20'

// fimSe
// FIM