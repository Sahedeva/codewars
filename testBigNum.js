function add(a, b) {
  var sum = 0;
  var sumArray = [];
  var carry = false;
  var aArray = a.split('');
  var bArray = b.split('');
  if (aArray.length==bArray.length) {
    for (i=aArray.length-1;i>=0;i--) {
      sum = (parseInt(aArray[i])+parseInt(bArray[i]));
      if(carry){
        sum++;
        carry = false;
      } 
      if (sum>9) {
        var sumStr=sum.toString();
        sumArray[i]=sumStr[1];
        if (i==0){
          sumArray.unshift("1");
        } else {
          carry = true;
        }
      } else {
        sumArray[i]=sum
      }
    }
    return sumArray.join('');
  } else if (aArray.length>bArray.length) {
    for (i=bArray.length-1;i>=0;i--) {
      sum = (parseInt(aArray[i+(aArray.length-bArray.length)])+parseInt(bArray[i]));
      if(carry){
        sum++;
        carry = false;
      } 
      if (sum>9) {
        var sumStr=sum.toString();
        sumArray[i]=sumStr[1];
        if (i==0){
          for(j=(aArray.length-bArray.length)-1;j>=0;j--){
            sum = (parseInt(aArray[j])+1);
            if (sum<9){
              aArray[j]=sum;
              break;
            } else {
                if (j>0) {
                var sumStr=sum.toString();
                aArray[j]=sumStr[1]
              } else {
                  var sumStr=sum.toString();
                aArray[j]=sumStr[1];
                aArray.unshift('1');
              }
            }
          }
        } else {
          carry = true;
        }
      } else {
        sumArray[i]=sum
      }
    }
    var newA = aArray.join('');
    var finalSum = newA.toString().substring(0,aArray.length-bArray.length)+sumArray.join('');
    return finalSum;
  } else if (aArray.length<bArray.length) {
    for (i=aArray.length-1;i>=0;i--) {
      sum = (parseInt(aArray[i])+parseInt(bArray[i+(bArray.length-aArray.length)]));
      if(carry){
        sum++;
        carry = false;
      }
      if (sum>9) {
        var sumStr=sum.toString();
          sumArray[i]=sumStr[1];
        if (i==0){
          for(j=(bArray.length-aArray.length)-1;j>=0;j--){
            sum = (parseInt(bArray[j])+1)
            if (sum<9) {
              bArray[j]=sum;
              break;
            } else {
                if (j>0) {
                var sumStr=sum.toString();
                bArray[j]=sumStr[1]
              } else {
                var sumStr=sum.toString();
                bArray[j]=sumStr[1];
                bArray.unshift('1');
              }
            }
          }
        } else {
          carry = true;
        }
      } else {
        sumArray[i]=sum
      }
    }
    var newB = bArray.join('');
    var finalSum = newB.toString().substring(0,bArray.length-aArray.length)+sumArray.join('');
    return finalSum;
  }
}
add ('999','99')