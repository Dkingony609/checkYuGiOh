function checkYuGiOh(n) {
  if (typeof n === "string" || typeof n === "number") {
    number = parseInt(n, 10);
    if (!isNaN(number)) {
      let array = Array.from({ length: number }, (_, i) => i + 1);
      for (let index = 0; index < array.length; index++) {
        if (
          array[index] % 2 === 0 &&
          array[index] % 3 === 0 &&
          array[index] % 5 === 0
        ) {
          array[index] = "yu-gi-oh";
        } else if (array[index] % 2 === 0 && array[index] % 3 === 0) {
          array[index] = "yu-gi";
        } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
          array[index] = "gi-oh";
        } else if (array[index] % 2 === 0 && array[index] % 5 === 0) {
          array[index] = "yu-oh";
        } else if (array[index] % 2 === 0) {
          array[index] = "yu";
        } else if (array[index] % 3 === 0) {
          array[index] = "gi";
        } else if (array[index] % 5 === 0) {
          array[index] = "oh";
        }
      }
      console.log(array);
      return array;
    } else {
      let returnStatement = `invalid parameter : ${n}`;
      console.log(returnStatement);
      return returnStatement;
    }
  } else {
    let returnStatement = `invalid parameter : ${n}`;
    console.log(returnStatement);
    return returnStatement;
  }
}

checkYuGiOh(10);
