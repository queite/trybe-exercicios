let a = 6;
let b = 10;
let c = 12;
if (a > b && a > c){
    console.log("O maior número é " + a);
}else if (b > a && b > c){
    console.log("O maior número é " + b);
}else if (c > a && c > b){
    console.log("O maior número é " + c);
} else {
    console.log("Você inseriu valores iguais em alguma posição")
}
