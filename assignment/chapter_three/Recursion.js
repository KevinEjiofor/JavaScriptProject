function isEven(n){
     if(n === 0){
        return true;


    }else if(n === 1){
        return false;


    }else{
        return isEven(n - 2);
    }

}

const result = isEven(50);
const result2 = isEven(75);

console.log(result,"\n",result2)

