let obj = {
  price: 120,
  quantity: 55,
  tag: "items",
  name: "coolStuff",
};

function sumOfMultipliedByTwo(obj) {
  let values = Object.values(obj);
  const result = values
    .filter((el) => typeof el === "number")
    .map((el) => el * 2)
    .reduce((acc, el) => acc + el, 0);
  console.log(result);
}

sumOfMultipliedByTwo(obj);

/*
Задание 8 — Работа с объектами.

Дан объект. в котором хранятся численные и строчные свойства. Все численные свойства умножаем на 2 и складываем их. Выводим на экран.

*/
