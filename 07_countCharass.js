console.log(`==*===*==*07_countCharAss02==*==*==`);

function countCharA(str) {
    var char = 'aA';
    var count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        var countA = str.charAt(i);
        if (char.includes(countA)) {

            count++;
        }
    }
    console.log(count);
}
console.log(`The number of 'A' and 'a' in the string1 is:`);
countCharA("I AM Learning JavaScript, The Language of internet")
console.log(`The number of 'A' and 'a' in the string2 is:`);
countCharA("My favorite movie is LAggAn");