module.exports = function solveEquation(equation) {
   var parameters = equation.replace(/\s/g, "").replace(/(\**x(\^2)*)/g, "&");
  var paramArr = parameters.split("&");
  
  var a = addParam(paramArr[0]);
  var b = addParam(paramArr[1]);
  var c = addParam(paramArr[2]);
  console.log(a,b,c);
  var discr = b*b - 4*a*c;
  var roots = [];
  
  if(discr === 0){
    var x = -b/2*a;
    roots.push(x);
    roots.push(x);
  } else {
    var x1 = Math.round((-b + Math.sqrt(discr))/(2*a));
    var x2 = Math.round((-b - Math.sqrt(discr))/(2*a));
    if(x1 < x2){
    	roots.push(x1);
    	roots.push(x2);
    }else{
    	roots.push(x2);
    	roots.push(x1);
    }
  }
  return roots;
}

function addParam(param){
  var result;
  if(param == ""){
    result = 1;
  }else if(param == "-"){
    result = -1;
  } else {
    result = Number.parseInt(param);
  }
  return result; 
}
