var myFunctions = {
  //https://github.com/wdi-sf-fall/functions_lab/tree/solutions
  add:function (num1, num2) {
    return num1 + num2;
},
  sub:function (num1, num2) {
    return num1 - num2;
},
  combine:function (num1, num2, bool) {
    if (bool) {
        return myFunctions.add(num1, num2);
    } else {
        return myFunctions.sub(num1,num2);
    }
},

  prime:function (n) {
    if (n <= 1) {
        return false;
    } else {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
},

  merge: function (one, two) {
    var combined = [];
    while (one.length > 0 && two.length > 0) {
        var smaller = one[0] < two[0] ? one : two;
        combined.push(smaller.shift());
    }
    return combined.concat(one, two);
}

};

module.exports=myFunctions;