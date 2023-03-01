function getIthBit(x, i) {
  return (x >> i) & 1;
}

// Example usage:
const x = 42; // 101010 in binary
const i = 1; // the 3rd bit (counting from right to left) of 42 in binary
const bit = getIthBit(x, i);
console.log(bit); 
