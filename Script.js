var a = [];
var prime = [];
var t = 0;
var p = 0;
function arr(length) {
  for (var i = 0; i < length; i++) {
    a[i] = i;

  }
  for (var j = 0; j < length; j++) {
    t = 0;
    for (var z = 2; z < a[j]; z++) {
      if (a[j] % z !== 0) {
        t++;
      }
    }
    if (t === 0) {
      prime[p] = a[j]
    }

  }
  console.log(prime)
}


arr(7);
//Odd number


