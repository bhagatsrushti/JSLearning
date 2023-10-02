console.log("*****AssignmentSwitchCase******");

var MonthOfYear= function (monthNum) {
    switch (monthNum) {
      case 1:
        console.log(`January`);
        break;
      case 2:
        console.log(`February`);
        break;
      case 3:
        console.log(`March`);
        break;
      case 4:
        console.log(`April`);
        break;
      case 5:
        console.log(`May`);
        break;
      case 6:
        console.log(`June`);
        break;
      case 7:
        console.log(`July`);
        break;
        case 8:
        console.log(`August`);
        break;
        case 9:
        console.log(`September`);
        break;
        case 10:
        console.log(`October`);
        break;
        case 11:
        console.log(`November`);
        break;
        case 12:
        console.log(`December`);
        break;
       default:
        console.log(`Invalid data: ${monthNum}`);
        break;
    }
  };
 
  MonthOfYear(0);
 console.log("Given Month number is : 0");
 

 MonthOfYear(2);
 console.log("Given Month of number is : 2");


 MonthOfYear(5);
 console.log("Given Month of number is : 5");


 MonthOfYear(12);
 console.log("Given Month of number is : 12");


 MonthOfYear(15);
 console.log("Given Month of number is : 15");


 MonthOfYear(100);
 console.log("Given Month of number is : 100");


 MonthOfYear(null);
 console.log("Given Month of number is : null");


 MonthOfYear(undefined)
 console.log("Given Month of number is : undefined");
;