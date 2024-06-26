// let notaA = 4
// let notaB = 5
// let notaC = 5
// let notaD = 5
// let media = (notaA + notaB + notaC + notaD) / 4

import { isArrayLiteralExpression } from "typescript"
import { Genero, Humano } from "./classes/humano"
import { Usuario } from "./classes/Usuario"
import { Admin } from "./classes/admin"
import { filme } from "./classes/filmes"
import { ListaDeFilmes } from "./classes/ListaDeFilmes"

// if (media > 6) {
//     console.log("aprovado")
// } else if (media < 4){
//     console.log("reprovado")
// } else {
//     console.log("recuperaçao")
// }

// let num = 1

// while (num > -20) {
//     console.log(num)
//     num = num - 1
// }

// while (num < 31) {
//     console.log(num)
//     num = num + 3
// }

// while (num < 20) {
//     console.log(num)
//     num = num + 2
// for (let dividendo = 2; dividendo < 20 ; dividendo++) {
//     let divisores = 0 

//     for (let divisor = 1; divisor <= dividendo; divisor++ )
//     if (dividendo % divisor == 0) {
//     divisores++

// } if (divisores == 2)
//     console.log(dividendo)
// }

// let [numeroA, numeroB] = [3, 15]
// let resultado = 0

// for(let i = numeroB; i > 0; i -= numeroA) {
//     resultado++
// }
// let multi = resultado * numeroA
// let resto = numeroB - multi

// console.log(resto)

// let num = 12
// let resultado = 0

// for (let fat = num; fat > 0; fat--) {
//         resultado = num * fat
//         console.log(resultado)
//     }

//     let divisores = 0
//     for (let divisor = 1; divisor <= num; divisor++) {
//     if (num % divisor == 0) {
//         divisores++
//     }
// } if (divisores == 2) {
//     console.log("é primo")
// } else {
//     console.log("não é primo")
// }

// for (let num = 5; num >= -100; num -= 5) {
//     console.log(num)
// }

// if (num % 3 == 0 && num % 2 == 0) {
//     console.log("é divisivel por ambos")
// } else {
//     console.log("não é divisivel por eles")
// }

// var num = 8 

// if (num % 5 == 0 && num % 4 == 0) {
// console.log("é divisivel pelos dois")
// } else {
//     console.log("não é divisivel por eles")
// }


// let [x, z] = [4, 8]
// let resultado = (x**3) + (z**2) + (3*z*x) - 25

// console.log(resultado)

// for (let num = 10; num >= -10; num -= 2) {
//     console.log(num)
// }

// let medias = [7, 8, 5, 9]
// let numerosPrimos = []
// for (let i = 0; i < medias.length; i++) {
//     soma = soma + medias[i]
// }
// console.log("a sua media é: " + soma / medias.length)

// for (let i = 0; i < medias.length; i++) {
//     let divisores = 0
//     for (let u = 1; u <= medias[i]; u++) {
//         if (medias[i] % u == 0) {
//             divisores++
//         }
//     }
//     if (divisores == 2) {
//         numerosPrimos.push(medias[i])
//     }
// }
// console.log(numerosPrimos) 

// let numeros = [7, 15, 12, 14, 8, 26, 35, 22]
// let resultado = []

// for (let i = 0; i < medias.length; i++)


    // for (let i = numeros.length - 1; i >= 0; i--) {
    //     resultado.push(numeros[i])
    // }
    // console.table(resultado)


// function multiPorN(array: number[][], number: number) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             console.log(array[i][j] * number)
//         }
//     }
// }

// let array = [
//     [1, 2, 3, 4] ,
//     [5, 6, 7, 8]
// ]

// multiPorN(array, 10)

// function impares(array: number[][]) {
//     let resultadoDeImpares = 0
    
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (array[i][j] % 2 != 0) {
//                 resultadoDeImpares++
//             }
//         }
//     }

//     return resultadoDeImpares
// }


// let array = [
//     [1, 3, 8, 7] ,
//     [2, 6, 1, 9] ,
//     [13, 6, 11, 12]
// ]

// console.log(impares(array))

// let diagonais = [
//   [1, 1, 1] ,
//   [1, 1, 1] ,
//   [1, 1, 1]  
// ]

// for (let i = 0; i < diagonais.length; i++) {
//     for (let j = 0; j < diagonais[i].length; j++)
//         if (i == j) {
//         diagonais[i][j] = 0
//         }
// }
 

// console.table(diagonais)

// function numeros(numA: number[]) {
//   for(let i = 0; i < numA.length; i++) 
//     console.log(numA[i]) 

// numeros([1, 2, 3])

// function soma(num: number[]) {
//     let resultado = 0
//     for (let i = 0; i < num.length; i++) {
//         resultado = resultado += num[i]
//     }
//       return resultado
// }

// console.log(soma([12, 6, 3]))

// let a = [1, 2, 3]
// let resultado = 0

// function soma(a: number[]) {
//     for (let i = 0; i < a.length; i++) {
//         resultado = resultado + a[i]
//     }
//     return resultado
// }

// console.log(soma(a))

// let vetor = [1, 2, 3]
// let fator = 3

// function multiplicação(vetor: number[], fator: number) {
//     for (let i = 0; i < vetor.length; i++)
//         console.log(vetor[i] * fator)
// }

// console.log(multiplicação(vetor, fator))


// function numerosEntre(a: number, b: number) {
//     let numeros = []
//     for (let i = a + 1; i < b; i++) {
//          numeros.push(i)
//     } console.log(numeros)
// }

// numerosEntre(2, 6)

// function averiguarTOF(vetor: boolean[]) {
//     let verdadeiro = 0
//     let falso = 0
//     for (let i = 0; i < vetor.length; i++) {
//          if (vetor[i] == true) {
//             verdadeiro++ 
//          } else {
//             falso++
//          }
//     } 
//     if (verdadeiro == 2 && falso == 0) {
//         return "Ambos são verdadeiros"
//     } else if (verdadeiro == 1 && falso == 1) {
//         return "Ao menos um verdadeiro"
//     } else {
//         return "Ambos são falsos"
//     }
// }

// let vetor = [5 < 4, 5 > 3]

// console.log(averiguarTOF(vetor))


//  function iguais(vetorA: number[], vetorB: number[]) {
//     let resultado = 0
//     for (let i = 0; i < vetorA.length; i++) {
//          if (vetorA[i] == vetorB[i]) {
//             resultado++
//          }
//     }
//     if (resultado == vetorA.length) {
//         return true
//     } return false
// }
// let vetorA = [1, 2, 3]
// let vetorB = [8, 6, 4]

// console.log(iguais(vetorA, vetorB))


   

// function multiplicar(array: number[][], num: number) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//               array[i][j] = array[i][j] * num
            
//         }
//     } return array
// }

// let array = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
// console.table(multiplicar(array, 3))


// let pessoaA: Humano = new Humano("Thiago", 19, 1.70, Genero.MASCULINO, "branco", 52)
// console.log(pessoaA.andar())

// let resultado = 0
// function soma(array: number[][]) {
//         for (let i = 0; i < array.length; i++) {
//             for (let j = 0; j < array[i].length; j++) {
//                 resultado = resultado + array[i][j]
//             }
//         } 
//         if (resultado < 0) {
//             return "é negativo"
//         }
//         return "é positivo"
// }

// let array = [
//     [1, 2, 3],
//     [-4, -5, -6]
// ]


// console.log(soma(array))

// let pares = 0
// function checagemDeImpares(array: number[][]) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             if (array[i][j] % 2 == 0) {
//                 pares++
//             }
//         }
//     } return pares
// }

// let array = [
//     [1, 4, 7],
//     [3, 5, 9]
// ]

// console.log(checagemDeImpares(array))


// function subtração(array: number[][], num: number) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//             array[i][j] = array[i][j] / num
//         }
//     } return array
// }

// let array = [
//     [3, 6, 7],
//     [2, 8, 4]
// ]

// console.table(subtração(array, 3))


// function iguaisOuNão(arrayA: number[][], arrayB: number[][]) {
//     for (let i = 0; i < arrayA.length; i++) {
//         for (let j = 0; j < arrayA[i].length; j++) {
//             if (arrayA[i][j] != arrayB[i][j]) {
//                 return false
//             }
//         }
//     } return true        
// }

// let arrayA = [
//     [1, 2],
//     [3, 4]
// ]

// let arrayB = [
//     [1, 2],
//     [3, 4]
// ]

// console.log(iguaisOuNão(arrayA, arrayB))


// function boo(arrayA: boolean[][]) {
//     for (let i = 0; i < arrayA.length; i++) {
//         for (let j = 0; j < arrayA[i].length; j++) {
//             if (arrayA[i][j] == true) {
//                 console.log(true) 
//             } else {
//                 console.log(false)
//             }
//         }
//     }
// }

// let arrayA = [
//     [2 < 3, 5 > 1],
//     [1 < 5, 5 < 3]
// ]

// boo(arrayA)

// let admin1 = new Admin("thiago", "453.436.876-56", "12345678")

// admin1.navegar()

// function tOF(a: boolean, b: boolean) {
//     if (a == false || b == false) {
//         return true
//     } return false
// }
// console.log(tOF(5 > 2, 2 > 1))

// function maior(a: number, b: number, c: number) {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } return c
// }
// console.log(maior(5, 4, 6))

// let pares = 0
// function sãoPares(a: number, b: number, c: number, d: number) {
//     if (a % 2 == 0) {
//         pares++
//     }
//     if (b % 2 == 0) {
//         pares++
//     }
//     if ( c % 2 == 0) {
//         pares++
//     }
//     if (d % 2 ==0) {
//         pares++
//     }
//     return pares 
// }

// console.log(sãoPares(1, 2, 6, 7))

// function maior(a: number, b: number, c: number, d: number) {
//     if (a > b && a > c && a > d) {
//         return a 
//     } else if (b > a && b > c && b > d) {
//         return b
//     } else if (c > a && c > b && c > d) {
//         return c
//     } else {
//         return d
//     }
// }
// console.log(maior(1, 2, 3, 4))


let filme1: filme = new filme("planeta dos macacos", 2024, "ação")
let filme2: filme = new filme("coringa", 2024, "suspense")
let filme3: filme = new filme("godzilla vs kong", 2023, "ação")

let listaDeFilmes = new ListaDeFilmes()

listaDeFilmes.adicionarFilme(filme1, filme2, filme3)

console.log(listaDeFilmes)

// function criar(array: number[][]) {
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             array[i][j] = -1
//         }
//     } return array
// }
// let array = [[],[],[]]
// console.table(criar(array))

// function copiar(arrayA: number[][], arrayB: number[][]) {
//     for (let i = 0; i < arrayA.length; i++) {
//         for (let j = 0; j < arrayA[i].length; j++) {
//             arrayB[i][j] = arrayA[i][j] 
//         }
//     } return arrayB
// }

// let arrayA = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]
// let arrayB = [[],[]]

// console.table(copiar(arrayA, arrayB))

// function diagonais(arrayA: number[][]) {
//     for (let i = 0; i < arrayA.length; i++) {
//         for (let j = 0; j < arrayA[i].length; j++) {
//             if (j == i) {
//                 arrayA[i][j] = 0
//             }
//         }
//     } 
//     for (let k = 0; k < arrayA.length; k++) {
//         for (let l = arrayA[k].length; l >= 0; l--) {
//             if(k == 0 && l == 2){
//                 arrayA[k][l] = 0
//             } else if (k==2 && l ==0){
//                 arrayA[k][l] = 0
//             }
        
//         }
//     }
//     return arrayA
// }
// let arrayA = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]
// console.table(diagonais(arrayA))


// function diagonais(arrayA: number[][]) {
//     let k = arrayA.length
//     for(let i = 0; i < arrayA.length; i++) {
//         k--
//         arrayA[i][k] = 0
//         for (let j = 0; j < arrayA[i].length; j++) {
//             if (i == j) {
//                 arrayA[i][j] = 0
//             }
//         }
//     }
        
//         return arrayA
// }
// let arrayA = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ]
// console.table(diagonais(arrayA))


// function diagonaisT(arrayA: number[][][]) {
//     let l = arrayA.length
//     for (let i = 0; i < arrayA.length; i++) {
//         l--
//         for (let j = 0; j < arrayA[i].length; j++) {
//             for (let k = 0; k < arrayA[j].length; k++) {
//                 if (j == k) {
//                     arrayA[j][i][k] = 0
//                 } else {
//                     arrayA[i][j][l] = 0
//                 }
//             }
//         }
//     }
//     return arrayA
// }
// let arrayA = [
//     [
//         [1, 1, 1],
//         [1, 1, 1],
//         [1, 1, 1]
//     ],
//     [
//         [1, 1, 1],
//         [1, 1, 1],
//         [1, 1, 1]
//     ],
//     [
//         [1, 1, 1],
//         [1, 1, 1],
//         [1, 1, 1]
//     ]
// ]

// console.table(diagonaisT(arrayA))

// function copia(vetorA: number[], vetorB: any[]) {
//     let j = vetorA.length
//     for (let i = 0; i < vetorA.length; i++) {
//         vetorB[j] = vetorA[i]
//         j--
//     } 
//     return vetorB
// }
// let vetorA = [1, 2, 3]
// let vetorB: any = []

// console.log(copia(vetorA, vetorB))


// function checagemDeNumerosIP(vetor: number[]) {
//     let impares = 0
//     let pares = 0
//     for (let i = 0; i < vetor.length; i++) {
//         if (vetor[i] % 2 != 0) {
//             impares++
//         } else {
//             pares++
//         }
//     }
//     return [impares, pares] 
// }
// console.log(checagemDeNumerosIP([1, 2, 3, 4, 5, 6]))

// function subtracao(vetorA: number[]) {
//     let subtraendo = 2
//     for (let i = 0; i < vetorA.length; i++) {
//         vetorA[i] = vetorA[i] - subtraendo
//     }
//     return vetorA
// }
// console.log(subtracao([4, 7, 9]))


// function multi(vetorA: number[], vetorB: number[]) {
//     for (let i = 0; i < vetorA.length; i++) {
//         vetorA[i] = vetorA[i] * vetorB[i]
//     }
//     return vetorA
// }
// console.log(multi([1, 2, 3,], [4, 5, 6]))

// function guardar(A: number[], B: number[], C: number[]) {
//     for (let i = 0; i < A.length; i++) {
//         C[i] = A[i] + B[i]
//     }
//     return C
// }
// console.log(guardar([1, 2, 3, 4], [5, 6, 7, 8], []))

// function entre(A: number, B: number, vetor: number[]) {
//     if (A > B) {
//         for (let i = B + 1; i < A; i++) {
//             vetor.push (i)
//         }
//     } else if (B > A) { 
//         for (let i = A + 1; i < B; i++) {
//             vetor.push (i)
//         }
//     }
// }

// console.log(entre(17, 7, []))
 

// const vetorX = [1,2,3,4,5]

// function somarElementos(vetor: number[]) {
//     let soma = 0

//     for (let elemento of vetor) {
//         soma = soma + elemento
//     }

//     return soma
// }

// const media = somarElementos(vetorX) / vetorX.length

// console.log(media)

