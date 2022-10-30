function binominalCoefficient(n,k) {
    function factorialize(x) {
      if (x < 0) {
        return -1;
      } else if (x === 0) {
        return 1;
      } else {
        return x * factorialize(x - 1);
      }
    }

    if (n < 0 || k < 0) {
        console.log('Hey man, write a positive number.')
    } else if (n >= k) {
       const result = (factorialize(n))/(factorialize(k)*factorialize(n-k))
       console.log(result) 
    } else {
       console.log(0)
    }
}

binominalCoefficient(10, 5);
binominalCoefficient(10,2);
binominalCoefficient(5, 10);
binominalCoefficient(10, -5);

