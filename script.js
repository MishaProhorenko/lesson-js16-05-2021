'use strict';

// const value = '1руб + 15коп + 2руб + 90коп';

// const currencyCounter = (str) => {
//     const currencyAsArray = str.split(' + ');
//     let cop = 0;
//     let rub = 0;
//     currencyAsArray.forEach(item => {
//         if (item.includes('руб')) {

//             rub += parseInt(item);
//         };

//         if (item.includes('коп')) {
//             let indexOfCop = item.indexOf('коп');
//             cop += +item.slice(0, indexOfCop);
//         };
//     })



//     const all = rub * 100 + cop;
//     return `${Math.floor(all / 100)}руб ${all % 100}коп`
// };

// console.log(currencyCounter(value))


const arr = ['2 59 10 66 1002', '12 545 423', '99 44 22 11']


const getSumOfMinCalues = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].split(' '))
    }
    let sum = 0;
    newArr.forEach(item => {
        let sortedItemArr = item.sort((a, b) => a - b)
        let elem = +sortedItemArr[0];
        sum += elem;
    })
    console.log(sum);

}

getSumOfMinCalues(arr)