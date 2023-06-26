const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
const doubleArr = arr.map(item => item * 2)
console.log(doubleArr);

// utilizar el método filter para filtrar los números pares de arr

const evenOfSix = arr.filter(num => num % 2 === 0)
console.log(evenOfSix);

// utilizar el método reduce para sumar todos los elementos

const total = arr.reduce((initValue, currentValue) => initValue + currentValue, 0)
console.log(total);