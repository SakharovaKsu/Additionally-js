let object1 = {}
let object2 = {}

// console.log(object1 === object2)
// Почему false? Это 2 разных объекта, у них разные ссылки в памяти



let human = {
  'name': 'Anton',
  age: 33
}

// Изначально ключ в объекте всегда записан как строка, поэтому запись 'name' и age записаны правильно
// console.log(human.name)
// console.log(human['age'])



let human2 = {
  'name': 'Anton',
  age: 33
}

human2.isMarried = false // добавляем новый ключ: значение
// console.log(human2)

human2.isMarried = true // перезаписываем значение
// console.log(human2)

// как происходит перезапись значения у ключа? В объекте не могу быть два одинаковых ключа и будет присвоено то значение, которое стоит последним в очереде
// let human2 = {
//   'name': 'Anton',
//   age: 33
//   age: 28 // это последнее значение, оно и останется
// }



let object3 = {
  'name': 'Anton',
  age: 33,
  address: {
    city: 'Minsk',
    street: 'Kirova',
    house: 43
  }
}

let object4 = object3 // копирование на ту же память объекта, если меняется object4, то меняется object3, поэтому при сравнении будет true
// напоминаю, что объект это ссылочный тип данных
// console.log(object3 === object4)



let object5 = {
  'name': 'Anton',
  age: 33,
  address: {
    city: 'Minsk',
    street: 'Kirova',
    house: {
      number: 23,
      floor: '2-nd',
      flat: 11
    }
  }
}

let object6 = object5

object6.name = 'Denis'
object6.age = 35
object6.address.city = 'London'
object6.address.house.flat = 3

// console.log(object5.address.city === 'London') // true
// console.log(object5.address.house.flat === 3) // true



let object7 = {
  'name': 'Anton',
  age: 33,
  address: {
    city: 'Minsk',
    street: 'Kirova',
    house: {
      number: 23,
      floor: '2-nd',
      flat: 11
    }
  }
}

let object8 = {...object7} // копируем (распаковка) объект, но не весь (используем спрет оператор)
// копируется имя и возраст, а остальное останется как ссылочным к тому объекту, с которого копировали (не копируются вложенные объекты)

// console.log(object7 ===  object8) // false
// console.log(object7.age ===  object8.age) // true
// console.log(object7.address.city ===  object8.address.city) // true
// console.log(object7.address.house.flat ===  object8.address.house.flat) // true

// object8.address.city = 'London'
// console.log(object7.address.city) // London
// console.log(object8.address.city) // London
// Почему переназначается в object7, когда мы меняем в object8? Потому что они ссылаются на один и тот же объект, одну и ту же ссылку в памяти

object8.age = 21
// console.log(object7.age) // 33
// console.log(object8.age) // 21

// поменять иммутабельно (делаем копию) city: 'Minsk' на 'Moscow'
let obj = {...object7, address: {...object7.address, city: 'Moscow'}}
// {...object7,} - скопировали объект, address: {...object7.address} - скопировали вложенный 2ой объект, city: 'Moscow' - создали новый ключ
// console.log(object7.address.city) // 'Minsk'
// console.log(obj.address.city) // 'Moscow'

// поменять name: 'Anton' на 'Roma' и 'Kirova' на 'Pushkina'
let obj2 = {...object7, name: 'Roma', address: {...object7.address, street: 'Pushkina'}}
// console.log(object7)
// console.log(obj2)

//  Поменять иммутабельно age: 33 на 23, city: 'Minsk' на 'Brest', flat:11 на 24
let obj3 = {...object7, age: 23, address: {...object7.address, city: 'Brest', house: {...object7.address.house, flat: 24}}}
// console.log(object7)
// console.log(obj3)




// Задачки на массив

let array = [1, 'Hi', true, 34, null, 'Alex']
// console.log(array[0] + array[3]) // 35
// console.log(array[1] + ', ' + array[5]) // Hi, Alex

// эти методы меняют массив мутабельно
// push - в конец массива добавляет элемент, возвращает длину массива
// pop - удаляет с конца один элемент
// shift - удаляет элемент в начале
// unshift - добавляет элемент в начало

array.push('Anna')
// console.log(array) // [1, 'Hi', true, 34, null, 'Alex', 'Anna']

array.pop()
// console.log(array) // [1, 'Hi', true, 34, null, 'Alex']

array.shift()
// console.log(array)  // [ 'Hi', true, 34, null, 'Alex' ]

array.unshift(23)
// console.log(array) // [ 23, 'Hi', true, 34, null, 'Alex' ]



let array2 = [2, -1, 23, 0, -9, 12, -7, 36, 49]

// увеличиваем каждый элемент на 1
let array3 = array2.map(el => el + 1)
// console.log(array3) // [3,  0, 24,  1, -8, 13, -6, 37, 50]

// вывести элементы, которые меньше -3
let array4 =  array2.filter(el => el < -3)
// console.log(array4) // [ -9, -7 ]



const wishes = [
  {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
  {id: 2, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
  {id: 3, title: 'Xiaomi 13', OS: "Android", checked: true},
  {id: 4, title: 'Huawei', OS: "Android", checked: false},
  {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
]

// вывести в консоль названия каждой модели телефон
const wishes2 = wishes.map(el => el.title)
// console.log(wishes2)

// вывести те объекты, в которых checked - true
const wishes3 = wishes.filter(el => el.checked)
// console.log(wishes3)

// Увеличить каждую id на 1
// для увелечения копируем массив (за нас делает это map, копируем объект и создаем новый ключ и значение с добавлением единицы)
const wishes4 = wishes.map(el => ({...el, id: el.id + 1}))
// console.log(wishes4)

// Заменить checked с true на false, с false на true
const wishes5 = wishes.map(el => ({...el, checked: !el.checked}))
// console.log(wishes5)



const wishes6 = {
  phones: [
    {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
    {id: 2, title: 'Huawei', OS: "Android", checked: false}
  ],
  books: [
    {id: 1, title: 'Dark Tower', Author: "Stephen Kig", price: 15},
    {id: 2, title: 'Flowers for Algernon', Author: "Daniel Keyes", price: 12}
  ]
}

// Заменить в phones id:2 title c 'Huawei' на 'Samsung Galaxy S7'

// копируем wishes6, после копируем phones и через мап прогоняем элементы и через условие ищем где нужно заменить title (делаем копию элемента объекта и перезаписываем название)
const wishes7 = {...wishes6, phones: wishes6.phones.map(el => el.id === 2 ? {...el, title:'Samsung Galaxy S7'} : el)}
console.log(wishes7)
