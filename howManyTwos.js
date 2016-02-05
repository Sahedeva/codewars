function twoCount(n) {
  // Your code here
  var num = n;
  var count = 0;
  while (num%2==0) {
    count ++;
    num = num/2;
  }
  return count;
  
}