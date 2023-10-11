console.log(`********09_classAssignA.js************`);

console.log(`========Step-1============`);
class Vehicle {
  constructor(
    vehicleName,
    color,
    engineType,
    fuelType,
    seatingCapacity,
    topSpeed
  ) {
    this.vehicleName = vehicleName;
    this.color = color;
    this.engineType = engineType;
    this.fuelType = fuelType;
    this.seatingCapacity = seatingCapacity;
    this.topSpeed = topSpeed;
  }
}
const arrayOfVehicle1 = new Vehicle(
  "Audi Q7",
  "Black",
  "3.0L V6 TFSI",
  "Petrol",
  "7",
  "250"
);
console.log(
  `Name Of Vehicle 1 : ${arrayOfVehicle1.vehicleName}| Color : ${arrayOfVehicle1.color} | Engine Type : ${arrayOfVehicle1.engineType} | Fuel Type : ${arrayOfVehicle1.fuelType} | Seating Capacity : ${arrayOfVehicle1.seatingCapacity}  | Top Speed : ${arrayOfVehicle1.topSpeed}`
);

const arrayOfVehicle2 = new Vehicle(
  "Range Rover ",
  "white",
  "3.2L V6 ",
  "Petrol",
  "6",
  "200"
);
console.log(
  `Name Of Vehicle 2 : ${arrayOfVehicle2.vehicleName}| Color : ${arrayOfVehicle2.color} | Engine Type : ${arrayOfVehicle2.engineType} | Fuel Type : ${arrayOfVehicle2.fuelType} | Seating Capacity : ${arrayOfVehicle2.seatingCapacity}  | Top Speed : ${arrayOfVehicle1.topSpeed}`
);

const arrayOfVehicle3 = new Vehicle(
  "BMW",
  "Black",
  "2993 to 2998 cc",
  "Petrol",
  "5",
  "200"
);
console.log(
  `Name Of Vehicle 3 : ${arrayOfVehicle3.vehicleName}| Color : ${arrayOfVehicle3.color} | Engine Type : ${arrayOfVehicle3.engineType} | Fuel Type : ${arrayOfVehicle3.fuelType} | Seating Capacity : ${arrayOfVehicle3.seatingCapacity}  | Top Speed : ${arrayOfVehicle3.topSpeed}`
);

const arrayOfVehicle4 = new Vehicle(
  "Audi Q6",
  "red",
  "2.8L V6 TFSI",
  "Petrol",
  "7",
  "250"
);
console.log(
  `Name Of Vehicle 4 : ${arrayOfVehicle4.vehicleName}| Color : ${arrayOfVehicle4.color} | Engine Type : ${arrayOfVehicle4.engineType} | Fuel Type ==> ${arrayOfVehicle4.fuelType} | Seating Capacity : ${arrayOfVehicle4.seatingCapacity}  | Top Speed : ${arrayOfVehicle4.topSpeed}`
);

const arrayOfVehicle5 = new Vehicle(
  "Hyundai Creta",
  "white",
  "1497 cc and 1498 cc ",
  "Diesel",
  "8",
  "150"
);
console.log(
  `Name Of Vehicle 5 : ${arrayOfVehicle5.vehicleName}| Color : ${arrayOfVehicle5.color} | Engine Type : ${arrayOfVehicle5.engineType} | Fuel Type : ${arrayOfVehicle5.fuelType} | Seating Capacity : ${arrayOfVehicle5.seatingCapacity}  | Top Speed : ${arrayOfVehicle5.topSpeed}`
);

console.log(`========Step-2============`);
class College {
  constructor(collegeName, city, departments, principalName) {
    this.collegeName = collegeName;
    this.city = city;
    this.departments = departments;
    this.principalName = principalName;
  }
  display() {
    console.log(
      `College Information Are As Given:: College Name: ${this.collegeName}, City : ${this.city}, Dept : ${this.departments} , Principal Name : ${this.principalName}`
    );
  }
}
const college1 = new College("Sinhagad College", "Pune", "MCA", "Puraneek Mam");
college1.display();

const college2 = new College(
  "Savitribai phule college",
  "Pune",
  "MCA",
  "Nikam sir"
);
college2.display();

const college3 = new College("MIT", "Pune", "MCA", "Pawar Sir");
college3.display();

const college4 = new College("RIT", "Satara", "MCA", "Kulkarni Sir");
college4.display();

console.log(`========Step-3============`);
function traverseObject(college) {
  for (const key in college) {
    const element = college[key];
    console.log(`${key}: ${element}`);
  }
}

traverseObject(college1);
traverseObject(college2);
traverseObject(college3);
traverseObject(college4);
