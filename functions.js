// 22mins ====>  Dealing with functions in Typescript 
function getsum(num1, num2) {
    return num1 + num2;
}
var getsub = function (num1, num2) {
    if (typeof num1 == "string" || typeof num2 == "string") {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(getsub('2', '4'));
// we can typecheck to parameters and return value
