const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg)
};

linhas = mapComThis([1, 2, 3], maca);

console.log(linhas)