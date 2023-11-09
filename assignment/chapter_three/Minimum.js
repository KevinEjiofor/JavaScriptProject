function minimumNumber(x,y){
    let smallNumber
    if(x < y){
        smallNumber = x
    }else{
        smallNumber = y
    }
    return smallNumber;
}

const result  = minimumNumber(3,-1) ;

console.log(result)