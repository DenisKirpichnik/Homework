//deep clone function
const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  // Create an array or object to hold the values
  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];

    // Recursively (deep) copy for nested objects, including arrays
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};

function fillArray(min, max) {
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  console.log(
    "This is the array",
    array,
    "and this is its length ",
    array.length
  );
  /*
  // Cloning the arr
  // let clonedArray = JSON.parse(
  // JSON.stringify(array)
  // ); // I guess ...arr would also work 
  */
  let clonedArray = deepCopyFunction(array);
  console.log(
    "This is the filtered cloned array",
    clonedArray.filter((el) => el % 3 === 1 && el > 1)
  );
}

fillArray(1, 16);
/*
Написать функцию, заполняющую массив цифрами от минимального до максимального значения по порядку. Минимальное и максимальное значение задается пользователем.
Вывести полученный массив в консоль.
Вывести количество символов в массиве.
Клонировать массив.
Написать функцию, фильтрующую клонированный массив. В массиве должны остаться только числа, у которых остаток от целочисленного деления на 3 равен единице (4, 7, и т.д)
*/
