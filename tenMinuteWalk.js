function isValidWalk(walk) {
  //insert brilliant code here
  if (walk.length==10) {
    var ns = 0;
    var ew = 0;
    for(i=0;i<walk.length;i++) {
      if (walk[i]=='n') {
        ns++
      } else if (walk[i]=='s') {
        ns--
      } else if (walk[i]=='e') {
        ew--
      } else if (walk[i]=='w') {
        ew++
      } 
    }
    if (ns==0&&ew==0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;  
  }
}