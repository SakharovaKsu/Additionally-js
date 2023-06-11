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

// Сформируйте массив студентов, у которых 100 и более баллов
const bestStudents = students.filter((st) => st.scores >= 100);

// Сформируйте массив из трёх лучших студентов
const topStudents = bestStudents.splice(0, 3);

// splice метод, который позволяет изменять содержимое массива, удаляя или добавляя элементы в произвольной позиции.
// console.log(bestStudents)
// console.log(topStudents)

// Сформируйте массив холостых студентов
const notMarriedStudents = students.filter((st) => !st.isMarried);

// Добавьте всем студентам свойство "isStudent" со значением true
const trueStudents = students.map((st) => ({ ...st, isStudent: true }));
console.log(trueStudents);

// Найдите Студентку по имени Ann
const ann = students.find((st) => st.name === "Ann");

// Найдите студента с самым высоким баллом
const bestStudent = students.reduce((acc, st) => {
  return acc.scores > st.scores ? acc : st;
});

