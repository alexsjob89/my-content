const fruits = new Set();

fruits.add('apple');
fruits.add('banana');
fruits.add('orange');
fruits.add('plum').add('pear').add('apricots');

fruits.add('apple');

fruits.delete('orange');

let check = fruits.has('apple');

console.log(fruits);

console.log(fruits);
console.log(check);
console.log(fruits.size);