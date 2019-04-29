var matriz = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,0,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
]

function largest(matriz){
    var cache = matriz;
    var result = 0;

    //modelo getemployeedetail

    for(var i=0;i<matriz.length;i++){
        for(j=0;j<matriz[i].length ;j++){             
            if(i != 0 && j != 0 && matriz[i][j] > 0){
                cache[i][j] = 1 + Math.min(cache[i][j-1], cache[i-1][j], cache[i-1][j-1])
            }            
            if(cache[i][j] > result){result =cache[i][j] }

        }
    }
    return result;
    
}

console.log(largest(matriz))