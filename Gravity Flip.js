const flip=(d, a)=>{
    if (d=='R'){
      a.sort(function(x, y){return x-y});
    }
    else{
      a.sort(function(x,y){return y-x});
    }
    return a
  }