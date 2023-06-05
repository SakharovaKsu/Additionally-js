
// создаем ключи для тасок, что б не путать к какому id относятся
const todoListId_1 = '1'
const todoListId_2 = '2'

const todoLists = [
  {
    id: todoListId_1,
    title: 'What to learn',
  },
  {
    id: todoListId_2,
    title: 'What to buy',
  }
]

// для хранения данных используем обычный массив
// объект - это реализация концепции ассоциативного массива
// Ассоциативный массив - это абстрактный тип данных, который позволяет хранить пары в виде - ключ: значение и поддерживает операции добавления пар, поиска пар и удаление по ключу

// этот вариант привлекательнее, чем 2-ой, так как таски уже заранее разбиты по нужным группам (ключ: значение)
// поиск нужной таски будет быстрее, перебор объекта происходит быстрее по ключу, чем по массиву

// это те таски, которые вытащили из массива выше
// при создании ключей для нашего объекта, используем квадратные скобки, что бы код не выполнялся (вычисляемое свойство объекта)
// если мы бы записали это как просто todoListId_1 - то js бы прочитал это как строку и не взял то, что лежит в переменной
const tasks = {
  [todoListId_1] : [ // '1'
    {id: '13', title: 'HTML', isDone: false},
    {id: '34', title: 'CSS', isDone: false},
    {id: '53', title: 'JS/TS', isDone: false},
  ],
  [todoListId_2] : [  // '2'
    {id: '22', title: 'MEAT', isDone: false},
    {id: '45', title: 'CHEESE', isDone: false},
    {id: '56', title: 'BEER', isDone: false},
  ],
}

const getId = () => Math.floor(Math.random() * 100) // рандомное id 0 - 100

// добавление таски
const addTaskList = (todoListTitle) => {
  const todoId = String(getId())

  const newTodo = {
    id: todoId,
    title: todoListTitle
  }

  const updatedTodos = [...todoLists, newTodo]
  console.log(updatedTodos)
  console.log({...tasks, [todoId]: []})
}

// удаление таски
const deleteTask = (taskId, todoId) => {
  const todoTasks = tasks[todoId]
  const updatedTasks = todoTasks.filter(t => t.id !== taskId)
  const copyTasks = {...tasks, [todoId]: updatedTasks}
}

const deleteTodo = (todoId) => {
  const updatedTasks = todoLists.filter(tl => tl.id !== todoId)
  delete tasks[todoId]
}


// плюсы такого варианта структур данных в массиве - простая структура данных
// из минусов, если тасок будет много, то поиск нужной таски будет геморройным
const tasks2 =
  [
    {
      id: '13',
      todoListId: '1',
      title: 'HTML',
      isDone: false
    },
    {
      id: '34',
      todoListId: '1',
      title: 'CSS',
      isDone: false
    },
    {
      id: '53',
      todoListId: '1',
      title: 'JS/TS',
      isDone: false
    },
    {
      id: '22',
      todoListId: '2',
      title: 'MEAT',
      isDone: false
    },
    {
      id: '45',
      todoListId: '2',
      title: 'CHEESE',
      isDone: false
    },
    {
      id: '56',
      todoListId: '2',
      title: 'BEER',
      isDone: false},
  ]

const students = [
  {
    id: 1,
    name: 'Bob',
    age: 33,
    isMarried: true,
    scores: 85
  },
  {
    id: 2,
    name: 'Bob',
    age: 33,
    isMarried: true,
    scores: 85
  },
  {
    id: 3,
    name: 'Nick',
    age: 20,
    isMarried: false,
    scores: 120
  },
  {
    id: 4,
    name: 'Mark',
    age: 22,
    isMarried: true,
    scores: 100
  }
]

// reduce - свертка, сворачивает во что-то одно, сворачивает в массив
const array = [2,4,5,4]
array.reduce((sum, el) => { // находим сумму элементов в массиве
  sum = sum + el
  return sum
}, 0)

// удаляем первого студента
// console.log(students.reduce((acc, el) => {
//   if(el.id !== 1) {
//     acc.push(el)
//     return acc
//   } else {
//     return acc
//   }
// }, [])) // массив будет без Боба


const stsAge = {
  '20': 1,
  '22': 1,
  '33': 2
}
// собираем объект по возрасту
// console.log(students.reduce((acc, el) => {
//   if(Object.keys(acc).includes(String(el.age))) {
//     acc[el.age] = acc[el.age] + 1
//     return acc
//   } else {
//     acc[el.age] = 1
//     return acc
//   }
// }, {})) // 20:1 22:1 33:2
