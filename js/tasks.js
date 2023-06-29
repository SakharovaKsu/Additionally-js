//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

function repeatString(substring, repetitions, separator) {
  let repeatedString = substring.repeat(repetitions); // Повторяем подстроку указанное количество раз
  if (repetitions > 1) {
    repeatedString = Array(repetitions).fill(substring).join(separator); // Используем разделитель для объединения повторенных подстрок
  }
  return repeatedString;
}
// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))



//2. Реализуйте функцию, которая принимает параметром строку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

function checkStart(string, substring) {
  return string.toLowerCase().startsWith(substring.toLowerCase())
}

// console.log(checkStart("Incubator", "inc"))
// console.log(checkStart("Incubator", "yo"))



//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + "..."
  // возвращаем строку без изменений, если её длина меньше или равна заданному числу
  // если нет же, то обрезаем строку до указанного количества символов и добавляем многоточие
}

// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))



//4. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
function getMinLengthWord(sentence) {
  if (!sentence) {
    return null;
  }

  // разбивает предложение на слова с помощью метода split(" "), а затем итерирует по массиву слов, чтобы найти самое короткое слово.
  const words = sentence.split(" ");
  let shortestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortestWord.length) {
      shortestWord = words[i];
    }
  }

  return shortestWord;
}
// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))



//5. Реализуйте функцию, которая принимает параметром строку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(sentence) {
  // Если предложение является пустой строкой, функция возвращает значение null
  if (!sentence) {
    return null;
  }

  const words = sentence.toLowerCase().split(" ");
  // использует метод map() для преобразования каждого слова таким образом, чтобы первая буква стала заглавной.

  const capitalizedWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
    // charAt(0) используется для получения первого символа слова
    // word.slice(1) возвращает остаток слова после первого символа
    // Заглавная буква добавляется к первому символу
  );

  // Остаток слова объединяется с помощью метода join(" "), чтобы вернуть предложение с измененными словами
  return capitalizedWords.join(" ");
}

// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") )
