/// Gabriel Gomes Barbosa - Sistemas de Informação

// 1. Função soma ////////////////////////////////////////
function soma(a, b) {
    return a + b;
}

// 2. Função isPar ////////////////////////////////////////
function isPar(numero) {
    return numero % 2 === 0;
}

// 3. Função media ////////////////////////////////////////
function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// 4. Função imc ////////////////////////////////////////
function imc(peso, altura) {
    return peso / (altura * altura);
}

// 5. Função calcularDesconto ////////////////////////////////////////
function calcularDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

// 6. Função calcularImpostoRenda ////////////////////////////////////////
function calcularImpostoRenda(salario) {
    if (salario <= 1903.98) return 0;
    if (salario <= 2826.65) return salario * 0.075;
    if (salario <= 3751.05) return salario * 0.15;
    if (salario <= 4664.68) return salario * 0.225;
    return salario * 0.275;
}

// 7. Função calcularMediaArredondada ////////////////////////////////////////
function calcularMediaArredondada(numeros) {
    const media = numeros.reduce((acc, num) => acc + num, 0) / numeros.length;
    return Math.round(media);
}

// 8. Função contarDigitosParesImpares ////////////////////////////////////////
function contarDigitosParesImpares(numero) {
    let pares = 0;
    let impares = 0;
    numero.toString().split('').forEach(digito => {
        if (parseInt(digito) % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    });
    return { pares, impares };
}

// 9. Função calcularMediaAlunos ////////////////////////////////////////
function calcularMediaAlunos(alunos) {
    const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.nota, 0);
    return somaNotas / alunos.length;
}

// 10. Função calcularIdade ////////////////////////////////////////
function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// 11. Função gerarTabuada ////////////////////////////////////////
function gerarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// 12. Função advinheNumero ////////////////////////////////////////
function advinheNumero() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0;
    let acertei = false;
    while (!acertei) {
        const tentativa = prompt("Tente adivinhar o número entre 1 e 100:");
        tentativas++;
        if (tentativa > numeroAleatorio) {
            console.log("Tente um número menor.");
        } else if (tentativa < numeroAleatorio) {
            console.log("Tente um número maior.");
        } else {
            acertei = true;
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        }
    }
}

// 13. Função verificarPropriedade ////////////////////////////////////////
function verificarPropriedade(objeto, propriedade) {
    return objeto.hasOwnProperty(propriedade);
}

// 14. Função calcularPrecoProduto ////////////////////////////////////////
function calcularPrecoProduto(custo, margemLucro, frete) {
    return custo + (custo * (margemLucro / 100)) + frete;
}

// 15. Função encontrarPalavraMaisLonga ////////////////////////////////////////
function encontrarPalavraMaisLonga(frase) {
    const palavras = frase.split(' ');
    return palavras.reduce((maior, palavra) => palavra.length > maior.length ? palavra : maior, '');
}

// 16. Função imprimirQuadro ////////////////////////////////////////
function imprimirQuadro(lista) {
    const tamanhoMaximo = Math.max(...lista.map(str => str.length)) + 2;
    const linha = '*'.repeat(tamanhoMaximo);
    console.log(linha);
    lista.forEach(item => console.log(`* ${item.padEnd(tamanhoMaximo - 2)} *`));
    console.log(linha);
}

// 17. Função filtrarStringsLongas ////////////////////////////////////////
function filtrarStringsLongas(array) {
    return array.filter(str => str.length > 5);
}

// 18. Função filtrarLivrosPorAutor ////////////////////////////////////////
function filtrarLivrosPorAutor(livros, autor) {
    return livros.filter(livro => livro.autor === autor);
}

// 19. Função encontrarPessoaMaisVelha ////////////////////////////////////////
function encontrarPessoaMaisVelha(pessoas) {
    return pessoas.reduce((maisVelha, pessoa) => pessoa.idade > maisVelha.idade ? pessoa : maisVelha);
}

// 20. Função filtrarCarrosPorAno ////////////////////////////////////////
function filtrarCarrosPorAno(carros, ano) {
    return carros.filter(carro => carro.ano > ano);
}

// 21. Função inverterString ////////////////////////////////////////
function inverterString(str) {
    return str.split('').reverse().join('');
}

// ////////////////////////////////////////

console.log(soma(5, 3));
console.log(isPar(4));
console.log(media(7, 8, 9)); 
console.log(imc(70, 1.75));
console.log(calcularDesconto(100, 10)); 
console.log(calcularImpostoRenda(3000));
console.log(calcularMediaArredondada([5, 7, 9]));
console.log(contarDigitosParesImpares(123456));
console.log(calcularMediaAlunos([{ nome: 'João', nota: 7 }, { nome: 'Maria', nota: 8 }, { nome: 'José', nota: 6 }]));
console.log(calcularIdade(2000));
gerarTabuada(5); 
advinheNumero(); 
console.log(verificarPropriedade({ nome: 'Gabriel', idade: 25 }, 'idade')); 
console.log(calcularPrecoProduto(50, 20, 10)); 
console.log(encontrarPalavraMaisLonga('Tutorial de desenvolvimento da web'));  
imprimirQuadro(["Hello", "World", "in", "a", "frame"]); 
console.log(filtrarStringsLongas(["short", "medium", "longword"])); 
console.log(filtrarLivrosPorAutor([{ autor: 'J.K. Rowling', titulo: 'Harry Potter' }, { autor: 'George Orwell', titulo: '1984' }], 'J.K. Rowling'));  
console.log(encontrarPessoaMaisVelha([{ nome: 'João', idade: 25 }, { nome: 'Maria', idade: 30 }]))  
console.log(filtrarCarrosPorAno([{ marca: 'Ford', modelo: 'Fusca', ano: 1960 }, { marca: 'Chevrolet', modelo: 'Celta', ano: 2000 }], 1990));  
console.log(inverterString('hello'));  