// Your code here
function saturdayFun (activity ="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  };

  function mondayWork (activity ="go to the office") {
    return `This Monday, I will ${activity}.`
  };

  function wrapAdjective(style="*"){
    return function(value="special"){
      return `You are ${style}${value}${style}!`
    }
  }

  let Calculator = {
    add: function (x,y){
      return x+y
    },
    subtract: function (x,y){
      return x-y
    },
    multiply: function(x,y){
      return x*y
    },
    divide: function(x,y){
      return x/y
    }
  }

  function actionApplyer(start, arr){
    for(let i=0; i<arr.length;i++){
      start=arr[i](start);
    }
    return start
  }