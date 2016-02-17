function combine() {
  // Your code here
  var args = (arguments.length === 1?[arguments[0]]:Array.apply(null, arguments));
  console.log(args);
  var sumObj = {};
  for (i=0;i<args.length;i++){
      var counter = 0;
    for (var key in args[i]){
        if (!sumObj[key]){
            sumObj[key]=0;
        }
        sumObj[key] += args[i][key];
        }
    }
    return sumObj;
  }