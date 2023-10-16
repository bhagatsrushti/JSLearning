



const map = new Map();
map.set(11,'Jenny');
map.set(22,'Bill');
map.set(33,'Elon');
map.set(44,'Stew');
console.log(map);
// console.log(typeof map);

const key33Value = map.get(33);
console.log(key33Value);

map.set(22,'ABC');
console.log(map);

map.set(55, 'Jenny');
console.log(map);


//total element size of map
 console.log(`Total elements in map is :${map.size}`);

map.delete(33); //element from the map
console.log(map);

console.log(map.has(22)); //map ke undar hai ki nhi that time use

//console.table(map);

const keys = map.keys();
console.log(keys);

const values = map.values();
console.log(values);
console.log(`Traversing map`);
//traverse value

for (const key of keys) {
    console.log(map.get(key));
    
}