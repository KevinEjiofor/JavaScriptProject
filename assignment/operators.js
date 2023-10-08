function operations(left_operand,operators,right_operand){
let ans;
if(operators === "+"){
    ans = left_operand + right_operand;

}else if (operators === "-"){

ans = left_operand - right_operand;

}else if(operators === "*" ){
    ans = left_operand * right_operand;}

else if(operators === "/"|| operators === "%" ){
    ans = left_operand / right_operand;

}else{
    ans = NaN
}


}
