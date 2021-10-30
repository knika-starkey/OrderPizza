function orderingPizza(orderNum, count = 1) {
  let str = "Ваш заказ: ";
  let pizzas = [
    "фирменная пицца",
    "пицца с грибами",
    "пицца с курицей и ананасом",
    "пицца 'Mаргарита'",
    "пицца 'Четыре сыра'",
    "пицца с морепродуктами",
    "пицца с тунцом",
    "вегетарианская пицца ",
    "грибная пицца",
  ];
  if (count == "") count = 1;
  if (orderNum == "") {
    str += pizzas[0] + " - " + count + "шт.";
    return str;
  } else if (isNaN(orderNum) || isNaN(count) || orderNum > pizzas.length - 1) {
    alert("Произошла ошибка, повторите заказ.");
    return;
  } else {
    str += pizzas[orderNum] + " - " + count + "шт.";
    return str;
  }
}
const myOrder = orderingPizza(
  prompt("Номер пиццы"),
  prompt("Сколько пицц Вы хотите заказать?")
);
console.log(myOrder);
document.write(myOrder);
