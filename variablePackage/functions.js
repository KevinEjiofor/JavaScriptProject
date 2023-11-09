let val = [200, 3, 45, 75, 10, 4, 7, 8];

for (var i = 0; i < val.length; i++) {
    for (var j = 0; j < val.length; j++) {

        if (val[i] < val[j]) {

            tempt = val[i];
            val[i] =  val[j];
            val[j] =  tempt;
        }
    }
}
console.log(val)