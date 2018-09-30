module.exports = function solveEquation(equation) {
  const parameters = equation.replace(/\s/g, "").replace(/(\**x(\^2)*)/g, "&");
  const сoefficiens = parameters.split("&");
  
  const a = parseСoefficient(сoefficiens[0]);
  const b = parseСoefficient(сoefficiens[1]);
  const c = parseСoefficient(сoefficiens[2]);

  const discriminant = b*b - 4*a*c;
  const roots = [];
  
  if(discriminant === 0){
    const x = -b/2*a;
    roots.push(x);
    roots.push(x);
  } else {
    var x1 = Math.round((-b + Math.sqrt(discriminant))/(2*a));
    var x2 = Math.round((-b - Math.sqrt(discriminant))/(2*a));
    
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

function parseСoefficient(param){
  let result;
  if(param == ""){
    result = 1;
  }else if(param == "-"){
    result = -1;
  } else {
    result = Number.parseInt(param);
  }
  return result; 
}
