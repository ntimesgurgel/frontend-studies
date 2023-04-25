function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    })
};

linhas = mapSemThis([1, 2, 3]);

console.log(linhas)