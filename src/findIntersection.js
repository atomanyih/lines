// https://math.stackexchange.com/questions/228841/how-do-i-calculate-the-intersections-of-a-straight-line-and-a-circle
// A = m * m + 1
// B = 2*(m * c - m * q - p)
// C = q * q - r * r + p * p - 2 * c * q + c * c
// x = (-B ± Math.sqrt(B * B - 4 * A * C)) / (2 * A);
// y = m * x + c;


const findIntersection = ({c, m, cy, cx, r}) => {
  const A = m * m + 1;
  const B = 2 * (m * c - m * cy - cx);
  const C = cy * cy - r * r + cx * cx - 2 * c * cy + c * c;
  const x = (-1 * B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
  const y = m * x + c;

  // console.log(B * B - 4 * A * C)
  // console.log({A, B, C, x, y})

  return [x, y]
};

export default findIntersection;