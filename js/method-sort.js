// метод sort

const name = ['Donald', 'Alex', 'Bob' ]
// console.log(name.sort()) // [ 'Alex', 'Bob', 'Donald' ]
// console.log(name === name.sort()) // true
// 1. первый вывод от метода sort - сортировку можно производить без каких-либо параметров
// 2. sort работает мутабельно, т.е. изменяет массив.
// 3. Возвращает ссылку на исходный массив (на самого себя)

const name_2 = ['Donald' ,'alex', 'Alex', 'bOB', '01_user', 'константин', 'Дима']
// console.log(name_2.sort()) // [ '01_user', 'Alex', 'Donald', 'alex', 'bOB', 'Дима', 'константин' ]
// 4. сортировка по unicod
// unicod - это стандарт кодирования символов, который определяет числовые значения для каждого символа




const number = [1000, -3, 777, 9, 9999]
// console.log(number.sort()) // [ -3, 1000, 777, 9, 9999 ]
// 5. числа воспринимает как строки
// получается, что сортировка сначала идет с символов, а после переходит в буквы (лучше смотреть таблицу unicod)

// 6. для остальных случаев необходимо параметром передавать функцию сравнения (callback)
const compFun = (a, b) => { // по возрастанию
  if(a > b) { // надо поменять местами, > 0
    return 1 // тут любое положительное (true)
  } else {
    return -1 // любое отрицательно (false)
  }
}
// Происходит сравнения по 2 числа, 1000 и -3. 1000 больше, меняет местами, потом сравнивает 1000 и 777, 1000 больше, меняет местами, потом 1000 сравнивает с 9999, тут 1000 меньше и местами уже не меняет
// console.log(number.sort(compFun)) // [ -3, 9, 777, 1000, 9999 ]

const compFun_2 = (a, b) => a - b // Краткая запись сортировки функ. compFun
// Если из а вычитаем b и получаем отрицательное число, то элементы переставлять не надо. Если положительное число, то элементы переставляем

const compFun_3 = (a, b) => b - a // сортировка по убыванию
// console.log(number.sort(compFun_3)) // [ 9999, 1000, 777, 9, -3 ]

// 7. Функция сравнения должна возвращать число больше или меньше 0

// Если, например, у нас уже есть отсортированный массив, можно воспользоваться методом reverse
// Метод reverse() не создает новый массив, а изменяет порядок элементов в исходном массиве. (мутабельный метод)
// console.log(number.reverse()) // [ -3, 9, 777, 1000, 9999 ]




const student = [
  {
    name: 'Anna',
    age: 22,
    isMarried: true,
    scores: 95
  },
  {
    name: 'Bob',
    age: 43,
    isMarried: true,
    scores: 46
  },
  {
    name: 'Oleg',
    age: 32,
    isMarried: false,
    scores: 77
  },
  {
    name: 'Masha',
    age: 29,
    isMarried: true,
    scores: 68
  },
  {
    name: 'Pasha',
    age: 22,
    isMarried: false,
    scores: 87
  },
]

// сортировка массива объектов по числовым значениям
// отсортировываем по возрастанию
// console.log(student.sort((a, b) => a.age - b.age))
// переставляться будут только объект, а сравнивается только age

// Сортировка по строкам по алфавиту
// console.log(student.sort((a, b) => a.name.localeCompare(b.name)))

// localeCompare() - это метод строк. Который сравнивает две строки лексикографически
// Возвращает число, которое указывает на порядок строк:
// Если а меньше b, метод вернет отрицательное число.
// Если а больше b, метод вернет положительное число.
// Если а и b равны, метод вернет 0.




// bubble sort - пузырьковая сортировка
// Алгоритм, который сравнивает пары соседних элементов массива и меняет их местами, если они стоят в неправильном порядке.
// Алгоритм продолжает проходить по массиву до тех пор, пока все элементы не будут отсортированы.
// Сам алгоритм можно описать след. образом:
// а) Проходим по массиву и сравниваем каждую пару соседних элементов.
// б) Если элементы стоят в неправильном порядке, меняем их местами.
// в) Повторяем проход по массиву до тех пор, пока все элементы не будут отсортированы.

const numbers = [56, 23, 12, 99, 64 ]

for (let j = 0; j < numbers.length - 1; j++) {

  let isSorted = true
  // length - 1 пишем для того, что б последняя пара чисел не сравнивалось с пустотой
  for (let i = 0; i < numbers.length - 1 - j; i++) {
    if(numbers[i] > numbers[i + 1]) {
      isSorted = false;
      // переставляем местами числа

      // let temp = numbers[i] // временная переменная
      // numbers[i] = numbers[i + 1] // в первую ячейку перекладываем содержимое 2-ой
      // numbers[i + 1] = temp // во 2-ую ячейку перекладываем из временной переменой значение 1-ой

      [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]] // деструкторизация, это то же самое, что и на 3-ех строках выше
    }
  }
  if(isSorted)break
  // isSorted если true, то останови цикл. А как понять, что не от сортировался весь массив? Если мы снова попадаем в цикл, где isSorted = false, если не попадаем, следовательно, isSorted = true
}
// console.log(numbers) // [ 12, 23, 56, 64, 99 ]
// Зачем нам два раза for? Что б цикл повторить повторно до тех пор, пока все элементы не от сортируются. Если было бы один for, то его надо было бы тогда повторить 4 раза, но что б этого не делать, создаем другой цикл и в него вставляем 2-ой цикл




const students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 90,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 19,
    isMarried: false,
    scores: 100,
  },
  {
    name: "Helen",
    age: 20,
    isMarried: false,
    scores: 110,
  },
  {
    name: "Ann",
    age: 20,
    isMarried: false,
    scores: 105,
  },
];

const deepCopyStudents = students.map((st) => ({ ...st }));

// Отсортируйте студентов по успеваемости (лучший идёт первым)
deepCopyStudents.sort((a, b) => b.scores - a.scores);

// Отсортируйте студентов по алфавиту
function sortByName(a, b) {
  switch (a.name > b.name) {
    case true:
      return 1;
    case false:
      return -1;
    default:
      return 0;
  }
}

// const sortedByName = deepCopyStudents.sort((a, b) => a.name >= b.name ? 1 : -1);
const sortedByName = students.sort((a, b)=> a.name.localeCompare(b.name));

