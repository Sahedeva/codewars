function add(a, b) {
  console.log(a,b);
  var sum = 0;
  var sumArray = [];
  var aArray = a.split('');
  var bArray = b.split('');
  if (a.length == b.length) {
    for (i=a.length-1;i>=0;i--){
      if (sumArray[i]){
        sum = (parseInt(aArray[i])+parseInt(bArray[i])+parseInt(sumArray[i]));
      } else {
        sum = (parseInt(aArray[i])+parseInt(bArray[i]));
      }
      if (sum>9){
        var sumStr=sum.toString();
        sumArray[i]=sumStr[1];
        if (i==0){
          sumArray.unshift("1");
        } else {
          sumArray[i-1]=1;
        }
      } else {
        sumArray[i]=sum;
      }
    }
    return sumArray.join('');
  } else if (a.length>b.length) {
    for (i=b.length-1;i>=0;i--){
      if (sumArray[i]){
        sum = (parseInt(aArray[i])+parseInt(bArray[i])+parseInt(sumArray[i]));
      } else {
        sum = (parseInt(aArray[i])+parseInt(bArray[i]));
      }
      if (sum>9){
        var sumStr=sum.toString();
        sumArray[i]=sumStr[1];
        if (i==0){
          for(j=(a.length-b.length)-1;j>=0;j--){
            sum = (parseInt(aArray[j])+1);
            if (sum<9){
              aArray[j]=sum;
              break;
            } else {
              if (j>0) {
                var sumStr=sum.toString();
                aArray[j]=sumStr[1];
              } else {
                var sumStr=sum.toString();
                aArray[j]=sumStr[1];
                aArray.unshift('1');
              }
            }
          }
        } else {
          sumArray[i-1]="1";
        }
      } else {
        sumArray[i]=sum;
      }
    }
    var newA = aArray.join('');
    var finalSum = newA.substring(0,a.length-b.length)+sumArray.join('');
    return finalSum;
  } else if (b.length>a.length) {
    for (i=a.length-1;i>=0;i--){
      if (sumArray[i]){
        sum = (parseInt(aArray[i])+parseInt(bArray[i])+parseInt(sumArray[i]));
      } else {
        sum = (parseInt(aArray[i])+parseInt(bArray[i]));
      }
      if (sum>9){
        var sumStr=sum.toString();
        sumArray[i]=sumStr[1];
        if (i==0){
          for(j=(b.length-a.length)-1;j>=0;j--){
            sum = (parseInt(bArray[j])+1);
            if (sum<9){
              bArray[j]=sum;
              break;
            } else {
              var sumStr=sum.toString();
              bArray[j]=sumStr[1];
              if (j==0) {
                bArray.unshift('1');
              }
            }
          }
        } else {
          sumArray[i-1]='1';
        }
      } else {
        sumArray[i]=sum;
      }
    }
    var newB = bArray.join('');
    var finalSum = newB.substring(0,b.length-a.length)+sumArray.join('');
    return finalSum;
    }
  }