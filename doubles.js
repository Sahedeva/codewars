function doubleCheck(str){
    //Are there doubles?
    str=str.toLowerCase();
    for (i=0;i<str.length-1;i++){
      if (str[i]==str[i+1]){
        return true;
      }
    }
    return false;
}