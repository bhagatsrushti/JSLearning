// type-1
// var dayNum;

// var displayDay = function(dayNum){
// if(dayNum==1)
// console.log(`Monday`);
// }
// if(dayNum==2){
// console.log(`Monday`);
// }

// if(dayNum==3){
//     console.log(`Monday`);
//     }
//     if(dayNum==4){
//         console.log(`Monday`);
//         }
//         if(dayNum==5){
//             console.log(`Monday`);
//             }
// displayDay(2);

//type-2

// var displayDay = function (dayNum) {
//     switch(dayNum){
//         case 1:
//             console.log(`Monday`);
//             break;
//     }
//     switch(dayNum){
//         case 2:
//             console.log(`Tuesday`);
//             break;
//     }
//     switch(dayNum){
//         case 3:
//             console.log(`Wensdday`);
//             break;
//     }
//     switch(dayNum){
//         case 4:
//             console.log(`Thursday`);
//             break;
//     }
//     switch(dayNum){
//         case 5:
//             console.log(`Friday`);
//             break;
//     }
//     switch(dayNum){
//         case 6:
//             console.log(`Saturday`);
//             break;
//     }
//     switch(dayNum){
//         case 7:
//             console.log(`Sunday`);
//             break;
//             default:
//                 console.log(`Invalid data: ${dayNum}`);
//                 break;
//     }
// };
// displayDay(2);
// displayDay(7);
// displayDay(9)

var displayDay = function (dayNum) {
  switch (dayNum) {
    case 1:
      console.log(`Monday`);
      break;
    case 2:
      console.log(`Tuesday`);
      break;
    case 3:
      console.log(`Wed`);
      break;
    case 4:
      console.log(`Thur`);
      break;
    case 5:
      console.log(`Fri`);
      break;
    case 6:
      console.log(`Saturday`);
      break;
    case 7:
      console.log(`Sunday`);
      break;
    default:
      console.log(`Invalid data: ${dayNum}`);
      break;
  }
};
displayDay(2);
displayDay(7);
displayDay(9);
displayDay(null);
displayDay(undefined);
displayDay(-11);
