/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){
  // inequality theorem
  if (((a+b)>c)&&((b+c)>a)&&((a+c)>b)){
    // figure out the angles
    var C = 0;
    // Law of Cosins - used when you just know the sides
    // where a,b,c are the sides and C is the angle across from side c
    // c*c=((a*a)+(b*b))-(2*a*b)cos(C)
    // C will output a result in radians (return of math.acos)
    C = Math.acos(((a*a)+(b*b)-c*c)/(2*a*b));
    // conversion of C from radians to degrees
    var degreeC = C*(180/Math.PI);
    var B = 0;
    B = Math.acos(((a*a)+(c*c)-(b*b))/(2*a*c));
    var degreeB = B*(180/Math.PI);
    var A = 0;
    A = Math.acos(((b*b)+(c*c)-(a*a))/(2*b*c));
    var degreeA = A*(180/Math.PI);
    if (degreeA === 90||degreeB === 90 || degreeC === 90) {
      return 2;
    } else if ((degreeA>90)||(degreeB>90)||(degreeC>90)){
      return 3;
    } else {
      return 1;
    }  
  } else {
    return 0;
  }
}
