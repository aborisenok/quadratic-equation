module.exports = function solveEquation(equation) {
  const parameters = equation.replace(/\s/g, "").replace(/(\**x(\^2)*)/g, "&");
  const сoefficiens = parameters.match(/((-?\+?)\d+)/g);
  const [a, b, c] = сoefficiens;

  const discriminant = b*b - 4*a*c;
  
  const x1 = Math.round((-b + Math.sqrt(discriminant))/(2*a));
  const x2 = Math.round((-b - Math.sqrt(discriminant))/(2*a));

  return [x1, x2].sort((a, b) => (a - b));
}
