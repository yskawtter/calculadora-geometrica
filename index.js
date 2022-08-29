let menuChosen = ""
let resul1
let resul2
let resul3

do {
    menuChosen = prompt("Olá, você chegou na matematica, você deseja: \n1-)Area do triângulo\n2-)Area do retângulo \n3-)Area do quadrado \n4-)Area do trapezio \n5-)Area do circulo  \n6-)Sair")

    

    if(menuChosen == "1") {
        resul1 = prompt("Escolhe o primeiro numero")
        resul2 = prompt("Escolha o segundo numero")
        function triangulo(base, altura) {
            alert("O resultado é " + (base * altura / 2))
        }
      (triangulo(resul1,resul2))
    } else if (menuChosen == "2") {
        resul1 = prompt("Escolhe o primeiro numero")
        resul2 = prompt("Escolha o segundo numero")
        function retangulo (base, altura) {
            alert("O resultado é " + (base * altura))
        }
        (retangulo(resul1, resul2))
    } else if (menuChosen == "3") {
        resul1 = prompt("Escolha seu numero")
        function quadrado(lado){
            alert("O resultado é " + (lado * lado))
        }
        (quadrado(resul1))
    }  else if (menuChosen == "4") {
        resul1 = prompt("Digite a base maior")
        resul2 = prompt("Digite a base menor")
        resul3 = prompt("Digite a altura")

        function trapezio(baseMaior, baseMenor, altura) {
            baseMaior = parseFloat(baseMaior)
            baseMenor = parseFloat(baseMenor)
            alert("O resultado é: " + ((baseMaior + baseMenor ) * altura / 2)) //corrigir o /2
        }
        trapezio(resul1, resul2, resul3)
    } else if (menuChosen == "5") {
        resul1 = prompt("Digite o raio")

        function raioqd (raio, pi) {
            alert("O resultado da área é: " + (resul1 * resul1) * 3.14)
        }
        (raioqd(resul1, 3.14))
    } else if (menuChosen == "6") {
        alert("Saindo da calculadora")
    } else {
        alert("Nenhuma opção escolhida, tente novamente")
    }
} while (menuChosen !== "6")