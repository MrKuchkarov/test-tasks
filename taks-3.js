function removeDuplicates(inputString) {
    // Разделяю строку на массив слов
    const wordsArray = inputString.split(',');

    // Создаю новый массив без дубликатов, используя Set для уникальных значений
    const uniqueWordsArray = [...new Set(wordsArray)];

    // Объединяю массив обратно в строку, разделяя слова запятой
    const resultString = uniqueWordsArray.join(',');

    return resultString;
}

const inputString = "кошка,собака,лошадь,корова,кошка,собака,лошадь,лошадь";
const stringWithoutDuplicates = removeDuplicates(inputString);
console.log(stringWithoutDuplicates);
