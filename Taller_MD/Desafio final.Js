let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let par = [];
let impar = [];

for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        impar.push(array[i]);
    }

    else {
        par.push(array[i]);
    }
}
console.log("Los numeros pares son:" + par);

