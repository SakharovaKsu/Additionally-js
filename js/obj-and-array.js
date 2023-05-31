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
