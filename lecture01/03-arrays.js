//estructura no dinamicas 
//su tamano esta definido desde que se piensa crearlo
// < ' ' > tipo de dato abstracto que soporta
// '?' puedes o no estar
var arr = [4, 5, 6]

arr.push(1, 2, 3)
arr.unshift(':)')
arr.splice(4,undefined,0)//agregar un numero despues del 6

var newArray = arr.splice(1,8)//borrar datos

newArray.unshift(100)

console.log(arr)
console.log(newArray)

//Formas de recorrer arrays
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

// //for --- for in --- for of

// //Primero se hace el for
// for (let i in arr){//i itera sobre lo que tenga el arreglo
//     console.log(i)
// }

// //Segundo for of
// for(let i of a){
//     console.log(i)
//     console.log(a[i])
// }

// //tercero forEach
// arr.forEach((element) => {
//     console.log(element);
// });
//cuando se hace un callback (una condicion) el return es implicito y no lleva llaves 
const newArray2 = newArray.filter((item) => {
    return item != 6
});
const newArray3 = newArray.filter((item) => item != 6);

console.log(newArray2)
