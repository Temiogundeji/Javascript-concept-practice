const person = {
    first: 'Wes',
    last: 'Bos',
  };
  
  const { first: firstName } = person;
  console.log(firstName); // Wes

  const person = { first: 'Wes', last: 'Bos' };
const { middle: middleName = 'Super Rad' } = person;
console.log(middleName); // 'Super Rad'