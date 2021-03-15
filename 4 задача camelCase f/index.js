function camelize(str) {
  var regex = /[_]\w/gi;
  let secondHalf = str.replace(regex, function (match) {
    return match.charAt(1).toUpperCase();
  });
  return str[0].toLowerCase() + secondHalf.substring(1);
}

console.log(camelize("JavaScript_is_awesome"));
/*
Написать функцию, преобразующую заданную пользователем строку из snake_case в camelCase (Example: JavaScript_is_awesome >>> javascriptIsAwesome )

*/
