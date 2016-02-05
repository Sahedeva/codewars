function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  if (Number.isInteger(Math.sqrt(sq))) {
    num = Math.sqrt(sq)
    return (num+1)*(num+1)
  } else {
    return -1;
  }
}