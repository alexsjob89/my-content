// let supers = "superman, batman, flash";
// let supersArray = supers.split(', ')

// console.log(supersArray);

let supers = ['superman', 'batman', 'flash', 'aquaman', 'spider-man', 'wolfrine', 'cyclop', 'profer-x'];


let findSuper = supers.findIndex(
    function(value) {
        return value === 'bigman'
    }
);


console.log(findSuper);