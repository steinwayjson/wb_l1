//Задача о коллекции функций: у вас есть массив функций, напишите код, который вызовет каждую функцию в этом массиве 
//и выведет их порядковый номер. Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

//Другими словами, нужно выполнить следующие шаги:
//  1. Вызвать первую функцию из массива.
//  2. После завершения работы первой функции вызвать вторую функцию.
//  3. После завершения работы второй функции вызвать третью функцию.
//И так далее, пока все функции в массиве не будут вызваны по порядку.

//Вариант 1 - Использование рекурсивной функций
//создаем массив ф-ций. В каждой ф-ции массива, выводим номер текущей ф-ции и производим вызов следующей ф-ции по индексу
const functionList = [
    () => {
        console.log('function1');
        callFunction(1);
    },
    () => {
        console.log('function2');
        callFunction(2);
    },
    () => {
        console.log('function3');
        callFunction(3);
    },
];

//ф-ция для вызова следующей ф-ции
const callFunction = (index) => {
    //производим проверку и рекурсивно вызываем все функции массива 
    if (index < functionList.length) {
        const currentFunction = functionList[index];
        currentFunction();
    }
}
   
//начинаем с первого индекса  в массиве
callFunction(0);