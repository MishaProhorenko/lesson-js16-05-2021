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


