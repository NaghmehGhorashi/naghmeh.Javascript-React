function reverseString(input) {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
    }
    return reversed;g
  }
  
  // Examples:
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  console.log(reverseString("12345")); // "54321"

  

  function reverseNumber(number) {
    const reversedString = number.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
  }
  
  // Examples:
  console.log(reverseNumber(12345)); // 54321
  console.log(reverseNumber(98765)); // 56789
  console.log(reverseNumber(101010)); // 10101

  

  const { name, info: { age } } = person;

// Examples:
console.log(name); // "John"
console.log(age);  // 30




const [first, second, ...rest] = thisArray;

// Examples:
console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["cherry", "dates", "elderberry", "fig"]