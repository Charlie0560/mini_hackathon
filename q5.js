function combineArray(array1, array2) {
    console.log([].concat(array1,array2));
    return [].concat(array1, array2);

  }
  
  const array1 = [1, 2, 3];
  const array2 = [5,6,7,8];
  
  combineArray(array1, array2);